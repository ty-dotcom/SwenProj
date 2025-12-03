'use client'

import { useEffect, useState } from 'react'

type Availability = {
  id: number
  start_time: string
  end_time: string
  is_booked: boolean
  counselor: number
}

export default function CustomCalendar() {
  const [availability, setAvailability] = useState<Availability[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<Availability | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Navigation state
  const [startOffset, setStartOffset] = useState(0)
  
  // Booking form state
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const now = new Date()

  // Generate 30 days from current offset
  const daysArray = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(now)
    date.setDate(now.getDate() + startOffset + i)
    return date
  })

  // Fetch availability from Django
  const fetchAvailability = async () => {
    try {
      setLoading(true)
      const res = await fetch('http://localhost:8000/api/availability/')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setAvailability(data.filter((slot: Availability) => !slot.is_booked))
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAvailability()
  }, [])

  // Get slots for a specific date
  const getSlotsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0]
    return availability.filter((slot) => slot.start_time.startsWith(dateStr))
  }

  // Check if date has available slots
  const isDateAvailable = (date: Date) => {
    return getSlotsForDate(date).length > 0
  }

  // Handle day click
  const handleDayClick = (date: Date) => {
    if (isDateAvailable(date)) {
      setSelectedDate(date)
      setSelectedSlot(null)
      setShowForm(false)
    }
  }

  // Handle slot selection
  const handleSlotClick = (slot: Availability) => {
    setSelectedSlot(slot)
    setShowForm(true)
    setName('')
    setAge('')
    setEmail('')
  }

  // Handle booking submission
  const handleSubmit = async () => {
    if (!selectedSlot || !name || !age || !email) {
      alert('Please fill in all fields')
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch('http://localhost:8000/api/book/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          availability_id: selectedSlot.id,
          name: name,
          age: parseInt(age),
          email: email,
        }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.detail || 'Booking failed')
      }

      alert('Booking successful!')
      setShowForm(false)
      setSelectedSlot(null)
      setSelectedDate(null)
      fetchAvailability() // Refresh to remove booked slot
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Booking failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Navigation handlers
  const goNext = () => setStartOffset(startOffset + 30)
  const goPrev = () => setStartOffset(Math.max(0, startOffset - 30))

  if (loading) {
    return <div style={{ padding: '2rem', color: '#fff' }}>Loading...</div>
  }

  if (error) {
    return <div style={{ padding: '2rem', color: '#f00' }}>Error: {error}</div>
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>Session Calendar</h2>
      <p style={{ color: '#888', marginBottom: '1rem' }}>
        {availability.length} slots available
      </p>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button
          onClick={goPrev}
          disabled={startOffset === 0}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: startOffset === 0 ? '#333' : '#4a9eff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: startOffset === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          ← Previous 30 days
        </button>
        <button
          onClick={goNext}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#4a9eff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Next 30 days →
        </button>
      </div>

      {/* Calendar Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
        {daysArray.map((date, index) => {
          const hasSlots = isDateAvailable(date)
          const isSelected = selectedDate?.toDateString() === date.toDateString()
          const isToday = date.toDateString() === now.toDateString()

          return (
            <div
              key={index}
              onClick={() => handleDayClick(date)}
              style={{
                border: isToday ? '2px solid #4a9eff' : '1px solid #444',
                padding: '0.5rem',
                cursor: hasSlots ? 'pointer' : 'default',
                backgroundColor: isSelected ? '#4a9eff' : hasSlots ? '#2a2a2a' : '#1a1a1a',
                color: hasSlots ? '#fff' : '#555',
                borderRadius: '6px',
                textAlign: 'center',
                opacity: hasSlots ? 1 : 0.5,
              }}
            >
              <div style={{ fontSize: '0.65rem', color: isSelected ? '#fff' : '#888' }}>
                {date.toLocaleDateString('default', { month: 'short' })}
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{date.getDate()}</div>
              <div style={{ fontSize: '0.6rem', color: isSelected ? '#ddd' : '#666' }}>
                {date.toLocaleDateString('default', { weekday: 'short' })}
              </div>
              {hasSlots && (
                <div style={{ fontSize: '0.55rem', color: isSelected ? '#fff' : '#4a9eff', marginTop: '2px' }}>
                  {getSlotsForDate(date).length} slot(s)
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div style={{ marginTop: '2rem' }}>
          <h3>
            Available times for {selectedDate.toLocaleDateString('default', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '1rem' }}>
            {getSlotsForDate(selectedDate).map((slot) => (
              <button
                key={slot.id}
                onClick={() => handleSlotClick(slot)}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: selectedSlot?.id === slot.id ? '#4a9eff' : '#2a2a2a',
                  color: '#fff',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                {new Date(slot.start_time).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
                {' - '}
                {new Date(slot.end_time).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Booking Form */}
      {showForm && selectedSlot && (
        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          backgroundColor: '#2a2a2a',
          borderRadius: '8px',
          border: '1px solid #444',
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Book this slot</h3>
          <p style={{ color: '#888', marginBottom: '1rem' }}>
            {new Date(selectedSlot.start_time).toLocaleString([], {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.25rem', color: '#ccc' }}>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  color: '#fff',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.25rem', color: '#ccc' }}>Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                min="1"
                max="120"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  color: '#fff',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.25rem', color: '#ccc' }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  color: '#fff',
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: isSubmitting ? '#666' : '#4a9eff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  fontWeight: 'bold',
                }}
              >
                {isSubmitting ? 'Booking...' : 'Confirm Booking'}
              </button>
              <button
                onClick={() => {
                  setShowForm(false)
                  setSelectedSlot(null)
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#333',
                  color: '#fff',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
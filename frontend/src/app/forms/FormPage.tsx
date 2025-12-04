'use client'
import Button from '@/src/components/Button';
import React, { useState } from 'react'

interface Form {
  id: number;
  name: string;
  label: string;
  question_type: string;
  response: string;
  list: string[];
}

export default function Home() {
  const [formContent, setFormContent] = useState<Form[]>([]);
  const [onEdit, setOnEdit] = useState(false);
  const [textFields, setTextFields] = useState<{ [key: string]: string }>({});
  const [editedField, setEditedField] = useState("");
  const [preview, setPreview] = useState(false);

  const saveForm = async () => {
    const res = await fetch("http://localhost:8000/api/forms/create/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Untitled Form",
        questions: formContent
      })
    });

    const data = await res.json();
    alert("Saved with ID " + data.form_id);
  };

  const addQuestion = () => {
    const field = {
      id: formContent.length,
      name: `question_${formContent.length}`,
      label: "Untitled question",
      question_type: "short_answer",
      response: "",
      list: []
    };
    setFormContent([...formContent, field]);
  };

  const setLabel = (id: number, text: string) => {
    const updated = formContent.map(f => f.id === id ? { ...f, label: text } : f);
    setFormContent(updated);
  };

  const deleteQuestion = (index: number) => {
    const updated = formContent.filter((_, i) => i !== index);
    setFormContent(updated);
  };

  const editField = (fieldName: string, text: string) => {
    const updated = formContent.map(f => f.name === fieldName ? { ...f, label: text } : f);
    setFormContent(updated);
  };

  const editFieldType = (fieldName: string, value: string) => {
    const updated = formContent.map(f => f.name === fieldName ? { ...f, question_type: value } : f);
    setFormContent(updated);
  };

  const addFieldOption = (fieldName: string, option: string) => {
    if (!option || !option.trim()) return;
    const updated = formContent.map(f =>
      f.name === fieldName ? { ...f, list: [...f.list, option] } : f
    );
    setFormContent(updated);
    // Clear the specific text field for this question
    setTextFields(prev => ({ ...prev, [fieldName]: "" }));
  };

  const deleteOption = (fieldName: string, optionIndex: number) => {
    const updated = formContent.map(f =>
      f.name === fieldName ? { ...f, list: f.list.filter((_, i) => i !== optionIndex) } : f
    );
    setFormContent(updated);
  };

  return (
    <div className="flex justify-center items-start w-full h-full py-10 px-4">
      <div className="w-full max-w-2xl">
        
        <div className="flex justify-between mb-4">
          <Button className="px-4 hover:bg-blue-500" onClick={() => setPreview(true)}>Preview</Button>
          <Button className="px-4 hover:bg-blue-500" onClick={() => setPreview(false)}>Edit</Button>
        </div>

        {!preview ? (
          <>
            <div className="flex flex-col space-y-2 my-4">
              <h1 className="text-2xl font-bold">Create Form</h1>
              <h2 className="text-lg">Untitled Form</h2>
            </div>

            <div className="bg-white shadow-lg rounded-md p-5 my-10">
              {formContent.map((field, i) => (
                <div key={i} className="mb-6 p-4 border border-gray-200 rounded-md">

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex-1 mr-4">
                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) => setLabel(field.id, e.target.value)}
                        className="w-full text-lg font-medium text-black border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none px-2 py-1"
                        placeholder="Enter question"
                      />
                    </div>

                    <select
                      className="text-black border border-gray-300 rounded px-3 py-1"
                      value={field.question_type}
                      onChange={(e) => editFieldType(field.name, e.target.value)}
                    >
                      <option value="short_answer">Short Answer</option>
                      <option value="paragraph">Paragraph</option>
                      <option value="multichoice">Multiple Choice</option>
                    </select>
                  </div>

                  <div className="my-4">
                    {field.question_type === "short_answer" && (
                      <div className="flex gap-3">
                        <input
                          type="text"
                          className="px-4 text-black border-b border-gray-300 h-10 block w-full"
                          placeholder="Short answer text"
                          disabled
                        />
                      </div>
                    )}

                    {field.question_type === "paragraph" && (
                      <div className="flex gap-3">
                        <textarea
                          rows={3}
                          className="px-4 py-2 text-black border border-gray-300 rounded-md block w-full"
                          placeholder="Long answer text"
                          disabled
                        />
                      </div>
                    )}

                    {field.question_type === "multichoice" && (
                      <div className="flex flex-col space-y-3">
                        
                        {/* Display existing options */}
                        {field.list.length > 0 && (
                          <div className="space-y-2">
                            {field.list.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3">
                                <input type="radio" disabled />
                                <span className="flex-1 text-black">{item}</span>
                                <button 
                                  className="text-red-600 hover:text-red-800 text-sm"
                                  onClick={() => deleteOption(field.name, idx)}
                                >
                                  Remove
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Add new option */}
                        <div className="flex gap-3 mt-3">
                          <input
                            type="text"
                            className="px-4 py-2 text-black border border-gray-300 rounded-md block w-full"
                            placeholder="Add an option"
                            value={textFields[field.name] || ""}
                            onChange={(e) => setTextFields(prev => ({ ...prev, [field.name]: e.target.value }))}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                addFieldOption(field.name, textFields[field.name] || "");
                              }
                            }}
                          />
                          <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md whitespace-nowrap" 
                            onClick={() => addFieldOption(field.name, textFields[field.name] || "")}
                          >
                            Add Option
                          </button>
                        </div>

                      </div>
                    )}
                  </div>

                  {/* Delete question button */}
                  <div className="flex justify-end mt-4">
                    <button 
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm" 
                      onClick={() => deleteQuestion(i)}
                    >
                      Delete Question
                    </button>
                  </div>

                </div>
              ))}

              <div className="flex justify-center mt-6">
                <button
                  onClick={addQuestion}
                  className="bg-gray-800 hover:bg-gray-700 text-black px-6 py-3 text-sm rounded-md"
                >
                  + Add Question
                </button>
              </div>

              {formContent.length > 0 && (
                <div className="flex justify-center mt-8">
                  <button onClick={saveForm} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md">
                    Save Form
                  </button>
                </div>
              )}

            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col space-y-2 my-4">
              <h1 className="text-2xl font-bold">Form Preview</h1>
              <h2 className="text-lg">Untitled Form</h2>
            </div>

            <div className="bg-white shadow-lg rounded-md p-5 my-10">
              {formContent.length === 0 ? (
                <p className="text-black text-center py-8">No questions added yet. Switch to Edit mode to add questions.</p>
              ) : (
                formContent.map((field, i) => (
                  <div key={i} className="mb-6">
                    <div className="block text-base font-medium text-black mb-3">
                      {field.label}
                    </div>

                    <div className="my-4 text-black">
                      {field.question_type === "short_answer" && (
                        <input 
                          type="text" 
                          className="px-4 py-2 border border-gray-300 rounded-md block w-full" 
                          placeholder="Your answer" 
                        />
                      )}

                      {field.question_type === "paragraph" && (
                        <textarea 
                          rows={4} 
                          className="px-4 py-2 border border-gray-300 rounded-md block w-full" 
                          placeholder="Your answer" 
                        />
                      )}

                      {field.question_type === "multichoice" && (
                        <div className="space-y-2">
                          {field.list.length > 0 ? (
                            field.list.map((item, idx) => (
                              <label key={idx} className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" name={`question_${i}`} value={item} />
                                <span>{item}</span>
                              </label>
                            ))
                          ) : (
                            <p className="text-black italic">No options added</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
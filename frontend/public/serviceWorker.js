// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/// <reference no-default-lib="true"/>
/// <reference lib="esnext"/>
/// <reference lib="webworker"/>

const sw = /**  @type  {ServiceWorkerGlobalScope & typeof globalThis} */ (
  globalThis
);

self.addEventListener("push", (event) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const message = event.data?.json();
  const { title, body, icon, image, channelId } = message;

  console.log("Received push: ", message);

  async function handlePushEvent() {
    const windowClients = await sw.clients.matchAll({ type: "window" });

    if (windowClients.length > 0) {
      const appInForeground = windowClients.some((client) => client.focused);

      if (appInForeground) {
        console.log("App in Foreground: Nothing shown");
        return;
      }
    }

    await sw.registration.showNotification(title, {
      body,
      icon,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      image,
      actions: [{ title: "Open chat", action: "open_chat" }],
      tag: channelId,
      renotify: true,
      data: { channelId },
    });
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  event.waitUntil(handlePushEvent());
});

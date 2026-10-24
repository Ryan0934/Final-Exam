(function () {
  "use strict";

  // Prevent duplicate injection
  if (document.getElementById("fc-floating-btn")) return;

  // =========================================================
  // CREATE FLOATING BUTTON
  // =========================================================

  const btn = document.createElement("button");

  btn.id = "fc-floating-btn";
  btn.type = "button";
  btn.setAttribute("aria-label", "Open chat");
  btn.textContent = "💬";

  document.body.appendChild(btn);


  // =========================================================
  // CREATE CHATBOX
  // =========================================================

  const chatbox = document.createElement("div");

  chatbox.id = "fc-chatbox";
  chatbox.style.display = "none";

  chatbox.innerHTML = `
    <div id="fc-chatbox-header">
      <span>Chat Everywhere</span>

      <button
        id="fc-chatbox-close"
        type="button"
        aria-label="Close chat"
      >
        ✕
      </button>
    </div>

    <div id="fc-tabs">

      <button
        class="fc-tab active"
        data-tab="chats"
        type="button"
      >
        Chats
      </button>

      <button
        class="fc-tab"
        data-tab="media"
        type="button"
      >
        Media
      </button>

      <button
        class="fc-tab"
        data-tab="groups"
        type="button"
      >
        Groups
      </button>

      <button
        class="fc-tab"
        data-tab="share"
        type="button"
      >
        Share
      </button>

      <button
        class="fc-tab"
        data-tab="tools"
        type="button"
      >
        Tools
      </button>

    </div>


    <div id="fc-tab-content">

      <!-- CHATS -->

      <div
        id="fc-chats"
        class="fc-tab-panel active"
      >
        <div id="fc-chatbox-messages"></div>
      </div>


      <!-- MEDIA -->

<div
  id="fc-media"
  class="fc-tab-panel"
>
  <div class="fc-media-section">

    <div class="fc-section-header">
      <div>
        <div class="fc-media-title">Your Media</div>
        <div class="fc-section-subtitle">
          Photos, videos, audio and files shared in this chat
        </div>
      </div>
    </div>

    <div class="fc-media-categories">

      <button class="fc-media-category active" type="button">
        <span>🖼️</span>
        <strong>Photos</strong>
        <small>12</small>
      </button>

      <button class="fc-media-category" type="button">
        <span>🎥</span>
        <strong>Videos</strong>
        <small>5</small>
      </button>

      <button class="fc-media-category" type="button">
        <span>🎵</span>
        <strong>Audio</strong>
        <small>8</small>
      </button>

      <button class="fc-media-category" type="button">
        <span>🔗</span>
        <strong>Links</strong>
        <small>14</small>
      </button>

    </div>

    <div class="fc-media-title">Recent Photos</div>

    <div
      class="fc-media-grid"
      id="fc-media-grid"
    ></div>

    <div class="fc-media-title fc-files-title">
      Recent Files
    </div>

    <div class="fc-file-list">

      <div class="fc-file">
        <div class="fc-file-icon">📄</div>

        <div class="fc-file-info">
          <div class="fc-file-name">
            Project-Brief.pdf
          </div>

          <div class="fc-file-size">
            2.4 MB • Today
          </div>
        </div>

        <button class="fc-file-action" type="button">
          ⋮
        </button>
      </div>

      <div class="fc-file">
        <div class="fc-file-icon">📊</div>

        <div class="fc-file-info">
          <div class="fc-file-name">
            Project-Report.xlsx
          </div>

          <div class="fc-file-size">
            856 KB • Yesterday
          </div>
        </div>

        <button class="fc-file-action" type="button">
          ⋮
        </button>
      </div>

      <div class="fc-file">
        <div class="fc-file-icon">📝</div>

        <div class="fc-file-info">
          <div class="fc-file-name">
            Meeting-Notes.docx
          </div>

          <div class="fc-file-size">
            428 KB • Monday
          </div>
        </div>

        <button class="fc-file-action" type="button">
          ⋮
        </button>
      </div>

    </div>

  </div>
</div>



      <!-- GROUPS -->

      <div
        id="fc-groups"
        class="fc-tab-panel"
      >

        <div class="fc-group-list">

          <button class="fc-group-item" type="button">

            <div class="fc-group-avatar">
              👥
            </div>

            <div class="fc-group-info">

              <div class="fc-group-name">
                Family
              </div>

              <div class="fc-group-members">
                5 members
              </div>

            </div>

          </button>


          <button class="fc-group-item" type="button">

            <div class="fc-group-avatar">
              👥
            </div>

            <div class="fc-group-info">

              <div class="fc-group-name">
                Work Team
              </div>

              <div class="fc-group-members">
                8 members
              </div>

            </div>

          </button>


          <button class="fc-group-item" type="button">

            <div class="fc-group-avatar">
              👥
            </div>

            <div class="fc-group-info">

              <div class="fc-group-name">
                Friends
              </div>

              <div class="fc-group-members">
                6 members
              </div>

            </div>

          </button>


          <button class="fc-group-item" type="button">

            <div class="fc-group-avatar">
              👥
            </div>

            <div class="fc-group-info">

              <div class="fc-group-name">
                Project Team
              </div>

              <div class="fc-group-members">
                10 members
              </div>

            </div>

          </button>

        </div>

      </div>


      <!-- SHARE -->

      <div
        id="fc-share"
        class="fc-tab-panel"
      >

        <div class="fc-share-section">

          <div class="fc-share-title">
            Share something
          </div>


          <button
            class="fc-share-option"
            id="fc-share-text"
            type="button"
          >

            <span class="fc-share-icon">
              💬
            </span>

            <span class="fc-share-info">
              <strong>Text</strong>

              <small>
                Share a message or text
              </small>
            </span>

            <span class="fc-share-arrow">
              ›
            </span>

          </button>


          <button
            class="fc-share-option"
            id="fc-share-link"
            type="button"
          >

            <span class="fc-share-icon">
              🔗
            </span>

            <span class="fc-share-info">
              <strong>Link</strong>

              <small>
                Share a website or URL
              </small>
            </span>

            <span class="fc-share-arrow">
              ›
            </span>

          </button>


          <button
            class="fc-share-option"
            id="fc-share-image"
            type="button"
          >

            <span class="fc-share-icon">
              🖼️
            </span>

            <span class="fc-share-info">
              <strong>Image</strong>

              <small>
                Share an image
              </small>
            </span>

            <span class="fc-share-arrow">
              ›
            </span>

          </button>


          <button
            class="fc-share-option"
            id="fc-share-file"
            type="button"
          >

            <span class="fc-share-icon">
              📎
            </span>

            <span class="fc-share-info">
              <strong>File</strong>

              <small>
                Share a document or file
              </small>
            </span>

            <span class="fc-share-arrow">
              ›
            </span>

          </button>

        </div>

      </div>


      <!-- TOOLS -->

<div
  id="fc-tools"
  class="fc-tab-panel"

  <div class="fc-tools-section">

    <div class="fc-tools-title">
      Tools
    </div>

    <button
      class="fc-tool-option"
      id="fc-tool-screenshot"
      type="button"
    >

      <span class="fc-tool-icon">
        📸
      </span>

      <span class="fc-tool-info">

        <strong>
          Screenshot Snippet
        </strong>

        <small>
          Select and capture part of your screen
        </small>

      </span>

      <span class="fc-tool-arrow">
        ›
      </span>

    </button>

    <button class="fc-tool-option" id="fc-tool-quick-notes" type="button">
      <span class="fc-tool-icon">📝</span>
      <span class="fc-tool-info">
        <strong>Quick Notes</strong>
        <small>Write a note and keep it in this chat</small>
      </span>
      <span class="fc-tool-arrow">›</span>
    </button>

    <button class="fc-tool-option" id="fc-tool-page-info" type="button">
      <span class="fc-tool-icon">🌐</span>
      <span class="fc-tool-info">
        <strong>Page Info</strong>
        <small>Send this page's title and link to the chat</small>
      </span>
      <span class="fc-tool-arrow">›</span>
    </button>

    <button class="fc-tool-option" id="fc-tool-word-counter" type="button">
      <span class="fc-tool-icon">🔢</span>
      <span class="fc-tool-info">
        <strong>Word Counter</strong>
        <small>Count words and characters in selected text</small>
      </span>
      <span class="fc-tool-arrow">›</span>
    </button>

    <button class="fc-tool-option" id="fc-tool-color-picker" type="button">
      <span class="fc-tool-icon">🎨</span>
      <span class="fc-tool-info">
        <strong>Color Picker</strong>
        <small>Choose a color and copy its HEX code</small>
      </span>
      <span class="fc-tool-arrow">›</span>
    </button>

  </div>
</div>
</div>



    <!-- INPUT -->

    <div id="fc-chatbox-input-row">

      <input
        id="fc-chatbox-input"
        type="text"
        placeholder="Type a message..."
        autocomplete="off"
      />

      <button
        id="fc-chatbox-send"
        type="button"
      >
        Send
      </button>

    </div>
  `;

  document.body.appendChild(chatbox);


  // =========================================================
  // ELEMENTS
  // =========================================================

  const messages =
    chatbox.querySelector("#fc-chatbox-messages");

  const input =
    chatbox.querySelector("#fc-chatbox-input");

  const sendBtn =
    chatbox.querySelector("#fc-chatbox-send");

  const closeBtn =
    chatbox.querySelector("#fc-chatbox-close");

  const tabs =
    chatbox.querySelectorAll(".fc-tab");

  const panels =
    chatbox.querySelectorAll(".fc-tab-panel");

  const inputRow =
    chatbox.querySelector("#fc-chatbox-input-row");

  const screenshotTool =
    chatbox.querySelector("#fc-tool-screenshot");

  const mediaGrid =
    chatbox.querySelector("#fc-media-grid");


  // =========================================================
  // STATE
  // =========================================================

  let isOpen = false;

  let screenshotStream = null;
  let screenshotVideo = null;
  let screenshotCanvas = null;
  let screenshotOverlay = null;

  let screenshotDragging = false;
  let screenshotResizing = false;

  let selection = {
    x: 100,
    y: 100,
    width: 400,
    height: 250
  };


  // =========================================================
  // OPEN / CLOSE
  // =========================================================

  function toggleChat() {

    isOpen = !isOpen;

    chatbox.style.display =
      isOpen ? "flex" : "none";

    if (isOpen) {
      setTimeout(() => input.focus(), 50);
    }
  }


  function closeChat() {

    isOpen = false;

    chatbox.style.display = "none";
  }


  // =========================================================
  // MESSAGE
  // =========================================================

  function addMessage(text, sender) {

    const msg =
      document.createElement("div");

    msg.className =
      `fc-message ${sender}`;

    msg.textContent = text;

    messages.appendChild(msg);

    messages.scrollTop =
      messages.scrollHeight;
  }


  // =========================================================
  // SEND MESSAGE
  // =========================================================

  function sendMessage() {

    const text =
      input.value.trim();

    if (!text) return;

    addMessage(text, "user");

    input.value = "";

    setTimeout(() => {
      addMessage("...", "bot");
    }, 300);
  }


  // =========================================================
  // YOUTUBE
  // =========================================================

  function getYouTubeVideoId(url) {

    try {

      const parsedUrl = new URL(url);

      const hostname =
        parsedUrl.hostname.toLowerCase();


      if (
        hostname === "youtube.com" ||
        hostname === "www.youtube.com"
      ) {

        return parsedUrl.searchParams.get("v");

      }


      if (hostname === "youtu.be") {

        return parsedUrl.pathname
          .replace(/^\/+/, "")
          .split("/")[0];

      }

    } catch (error) {

      return null;

    }

    return null;
  }


  function addYouTubeVideo(url) {

    const videoId =
      getYouTubeVideoId(url);

    if (!videoId) {

      addMessage(
        "Dropped link",
        "user"
      );

      return;
    }


    const videoMessage =
      document.createElement("div");

    videoMessage.className =
      "fc-message user fc-video-message";


    const iframe =
      document.createElement("iframe");

    iframe.src =
      `https://www.youtube.com/embed/${encodeURIComponent(videoId)}`;

    iframe.title =
      "YouTube video";

    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

    iframe.allowFullscreen = true;


    videoMessage.appendChild(iframe);


    const link =
      document.createElement("a");

    link.className =
      "fc-video-link";

    link.textContent =
      `youtube.com/watch?v=${videoId}`;

    link.href =
      `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;

    link.target = "_blank";

    link.rel =
      "noopener noreferrer";


    videoMessage.appendChild(link);

    messages.appendChild(videoMessage);

    messages.scrollTop =
      messages.scrollHeight;
  }


  // =========================================================
  // DRAG AND DROP
  // =========================================================

  chatbox.addEventListener("dragover", (event) => {

    event.preventDefault();

    chatbox.classList.add("fc-drag-over");

  });


  chatbox.addEventListener("dragleave", (event) => {

    if (!chatbox.contains(event.relatedTarget)) {

      chatbox.classList.remove(
        "fc-drag-over"
      );

    }

  });


  chatbox.addEventListener("drop", (event) => {

    event.preventDefault();

    chatbox.classList.remove(
      "fc-drag-over"
    );


    let data = "";

    if (event.dataTransfer) {

      data =
        event.dataTransfer.getData(
          "text/uri-list"
        ) ||

        event.dataTransfer.getData(
          "text/plain"
        ) ||

        event.dataTransfer.getData(
          "text/html"
        );

    }


    data = data.trim();

    if (!data) return;


    const youtubeId =
      getYouTubeVideoId(data);


    if (youtubeId) {

      addYouTubeVideo(
        `https://www.youtube.com/watch?v=${encodeURIComponent(
          youtubeId
        )}`
      );

      return;
    }


    const videoIdMatch =
      data.match(
        /(?:[?&])video_id=([^&]+)/i
      );


    if (videoIdMatch) {

      const videoId =
        decodeURIComponent(
          videoIdMatch[1]
        );

      addYouTubeVideo(
        `https://www.youtube.com/watch?v=${encodeURIComponent(
          videoId
        )}`
      );

      return;
    }


    const droppedUrl =
      data.split("\n")[0].trim();


    try {

      const parsedUrl =
        new URL(droppedUrl);

      addMessage(
        parsedUrl.hostname +
        parsedUrl.pathname,
        "user"
      );

    } catch (error) {

      addMessage(
        "Dropped link",
        "user"
      );

    }

  });


  // =========================================================
  // SCREENSHOT TOOL
  // =========================================================

  screenshotTool.addEventListener(
    "click",
    startScreenshot
  );




  // =========================================================
  // EXTRA TOOLS
  // =========================================================

  chatbox.querySelector("#fc-tool-quick-notes").addEventListener("click", () => {
    const note = window.prompt("Write a quick note:");
    if (note && note.trim()) {
      addMessage("📝 Note: " + note.trim(), "user");
      switchToTab("chats");
    }
  });

  chatbox.querySelector("#fc-tool-page-info").addEventListener("click", () => {
    addMessage("🌐 Current page\n" + document.title + "\n" + window.location.href, "bot");
    switchToTab("chats");
  });

  chatbox.querySelector("#fc-tool-word-counter").addEventListener("click", () => {
    const selected = window.getSelection ? window.getSelection().toString().trim() : "";
    const textToCount = selected || window.prompt("Paste or type text to count:");
    if (textToCount === null || !textToCount.trim()) return;
    const cleanText = textToCount.trim();
    const words = cleanText.match(/\\S+/g) || [];
    addMessage("🔢 Word Counter\nWords: " + words.length + "\nCharacters (with spaces): " + cleanText.length + "\nCharacters (without spaces): " + cleanText.replace(/\\s/g, "").length, "bot");
    switchToTab("chats");
  });

  chatbox.querySelector("#fc-tool-color-picker").addEventListener("click", () => {
    const picker = document.createElement("input");
    picker.type = "color";
    picker.value = "#10b981";
    picker.style.position = "fixed";
    picker.style.left = "-100px";
    document.body.appendChild(picker);
    picker.addEventListener("input", () => {
      const hex = picker.value.toUpperCase();
      addMessage("🎨 Selected color: " + hex, "bot");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(hex).catch(() => {});
      }
    });
    picker.addEventListener("change", () => picker.remove(), { once: true });
    picker.click();
    window.setTimeout(() => { if (picker.isConnected) picker.remove(); }, 60000);
  });

  // =========================================================
  // START SCREENSHOT
  // =========================================================

  async function startScreenshot() {

    if (
      !navigator.mediaDevices ||
      !navigator.mediaDevices.getDisplayMedia
    ) {

      alert(
        "Screenshot capture is not supported by this browser."
      );

      return;
    }


    stopScreenshot();


    try {

      screenshotStream = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: "always" },
        audio: false,
        preferCurrentTab: true,
        selfBrowserSurface: "include"
      });


      screenshotVideo =
        document.createElement("video");

      screenshotVideo.srcObject =
        screenshotStream;

      screenshotVideo.muted = true;

      screenshotVideo.playsInline = true;

      screenshotVideo.setAttribute(
        "aria-hidden",
        "true"
      );


      await screenshotVideo.play();


      await waitForVideoDimensions();


      screenshotCanvas =
        document.createElement("canvas");


      screenshotCanvas.width =
        screenshotVideo.videoWidth;

      screenshotCanvas.height =
        screenshotVideo.videoHeight;


      createScreenshotOverlay();


      const track =
        screenshotStream.getVideoTracks()[0];


      if (track) {

        track.addEventListener(
          "ended",
          stopScreenshot,
          { once: true }
        );

      }

    } catch (error) {

      console.log(
        "Screenshot cancelled:",
        error
      );

      stopScreenshot();

    }

  }


  // =========================================================
  // WAIT FOR VIDEO SIZE
  // =========================================================

  function waitForVideoDimensions() {

    return new Promise((resolve) => {

      if (
        screenshotVideo.videoWidth &&
        screenshotVideo.videoHeight
      ) {

        resolve();

        return;
      }


      const check =
        setInterval(() => {

          if (
            screenshotVideo &&
            screenshotVideo.videoWidth &&
            screenshotVideo.videoHeight
          ) {

            clearInterval(check);

            resolve();

          }

        }, 50);


      setTimeout(() => {

        clearInterval(check);

        resolve();

      }, 3000);

    });

  }


  // =========================================================
  // CREATE SCREENSHOT OVERLAY
  // =========================================================

  function createScreenshotOverlay() {

    screenshotOverlay =
      document.createElement("div");

    screenshotOverlay.id =
      "fc-screenshot-overlay";


    screenshotOverlay.innerHTML = `

      <div id="fc-screenshot-topbar">

        <div id="fc-screenshot-title">

          <span class="fc-screenshot-title-icon">
            📸
          </span>

          <span>
            Screenshot Snippet
          </span>

        </div>


        <div id="fc-screenshot-actions">

          <button
            id="fc-screenshot-cancel"
            class="fc-screenshot-button secondary"
            type="button"
          >
            Cancel
          </button>

          <button
            id="fc-screenshot-capture"
            class="fc-screenshot-button primary"
            type="button"
          >
            Capture
          </button>

        </div>

      </div>


      <div id="fc-screenshot-instruction">

        Drag to move • Drag the corners or edges to resize

      </div>


      <div id="fc-screenshot-selection">

        <div
          class="fc-resize-handle nw"
          data-handle="nw"
        ></div>

        <div
          class="fc-resize-handle n"
          data-handle="n"
        ></div>

        <div
          class="fc-resize-handle ne"
          data-handle="ne"
        ></div>

        <div
          class="fc-resize-handle e"
          data-handle="e"
        ></div>

        <div
          class="fc-resize-handle se"
          data-handle="se"
        ></div>

        <div
          class="fc-resize-handle s"
          data-handle="s"
        ></div>

        <div
          class="fc-resize-handle sw"
          data-handle="sw"
        ></div>

        <div
          class="fc-resize-handle w"
          data-handle="w"
        ></div>

      </div>

    `;


    document.body.appendChild(
      screenshotOverlay
    );


    const selectionElement =
      screenshotOverlay.querySelector(
        "#fc-screenshot-selection"
      );


    // =====================================================
    // INITIAL SELECTION
    // =====================================================

    const toolbarHeight = 100;

    const initialWidth =
      Math.min(
        500,
        Math.max(
          200,
          window.innerWidth - 80
        )
      );


    const initialHeight =
      Math.min(
        300,
        Math.max(
          150,
          window.innerHeight -
          toolbarHeight -
          80
        )
      );


    selection = {

      x:
        Math.max(
          0,
          (window.innerWidth -
            initialWidth) / 2
        ),

      y:
        Math.max(
          toolbarHeight + 20,
          (window.innerHeight -
            initialHeight) / 2
        ),

      width:
        initialWidth,

      height:
        initialHeight

    };


    constrainSelection();

    updateSelection();


    // =====================================================
    // MOVE
    // =====================================================

    selectionElement.addEventListener(
      "mousedown",
      startSelectionMove
    );


    // =====================================================
    // RESIZE
    // =====================================================

    const handles =
      selectionElement.querySelectorAll(
        ".fc-resize-handle"
      );


    handles.forEach((handle) => {

      handle.addEventListener(
        "mousedown",
        startResize
      );

    });


    // =====================================================
    // CANCEL
    // =====================================================

    screenshotOverlay
      .querySelector("#fc-screenshot-cancel")
      .addEventListener(
        "click",
        stopScreenshot
      );


    // =====================================================
    // CAPTURE
    // =====================================================

    screenshotOverlay
      .querySelector("#fc-screenshot-capture")
      .addEventListener(
        "click",
        captureScreenshot
      );


    // =====================================================
    // ESCAPE
    // =====================================================

    document.addEventListener(
      "keydown",
      handleScreenshotEscape
    );

  }


  // =========================================================
  // ESCAPE
  // =========================================================

  function handleScreenshotEscape(event) {

    if (
      event.key === "Escape" &&
      screenshotOverlay
    ) {

      stopScreenshot();

    }

  }


  // =========================================================
  // UPDATE SELECTION
  // =========================================================

  function updateSelection() {

    if (!screenshotOverlay) return;


    const element =
      screenshotOverlay.querySelector(
        "#fc-screenshot-selection"
      );


    if (!element) return;


    element.style.left =
      `${selection.x}px`;

    element.style.top =
      `${selection.y}px`;

    element.style.width =
      `${selection.width}px`;

    element.style.height =
      `${selection.height}px`;

  }


  // =========================================================
  // MOVE SELECTION
  // =========================================================

  function startSelectionMove(event) {

    if (
      event.target.classList.contains(
        "fc-resize-handle"
      )
    ) {

      return;

    }


    event.preventDefault();


    screenshotDragging = true;


    const startX =
      event.clientX;

    const startY =
      event.clientY;


    const original = {
      ...selection
    };


    function move(moveEvent) {

      selection.x =
        original.x +
        moveEvent.clientX -
        startX;


      selection.y =
        original.y +
        moveEvent.clientY -
        startY;


      constrainSelection();

      updateSelection();

    }


    function stop() {

      screenshotDragging = false;

      document.removeEventListener(
        "mousemove",
        move
      );

      document.removeEventListener(
        "mouseup",
        stop
      );

    }


    document.addEventListener(
      "mousemove",
      move
    );


    document.addEventListener(
      "mouseup",
      stop
    );

  }


  // =========================================================
  // RESIZE
  // =========================================================

  function startResize(event) {

    event.preventDefault();

    event.stopPropagation();


    const handle =
      event.currentTarget.dataset.handle;


    if (!handle) return;


    screenshotResizing = true;


    const startX =
      event.clientX;

    const startY =
      event.clientY;


    const original = {
      ...selection
    };


    function resize(moveEvent) {

      const dx =
        moveEvent.clientX -
        startX;

      const dy =
        moveEvent.clientY -
        startY;


      let x =
        original.x;

      let y =
        original.y;

      let width =
        original.width;

      let height =
        original.height;


      if (handle.includes("w")) {

        x =
          original.x + dx;

        width =
          original.width - dx;

      }


      if (handle.includes("e")) {

        width =
          original.width + dx;

      }


      if (handle.includes("n")) {

        y =
          original.y + dy;

        height =
          original.height - dy;

      }


      if (handle.includes("s")) {

        height =
          original.height + dy;

      }


      const minSize = 50;


      if (width < minSize) {

        if (handle.includes("w")) {

          x =
            original.x +
            original.width -
            minSize;

        }

        width = minSize;

      }


      if (height < minSize) {

        if (handle.includes("n")) {

          y =
            original.y +
            original.height -
            minSize;

        }

        height = minSize;

      }


      selection = {
        x,
        y,
        width,
        height
      };


      constrainSelection();

      updateSelection();

    }


    function stop() {

      screenshotResizing = false;

      document.removeEventListener(
        "mousemove",
        resize
      );

      document.removeEventListener(
        "mouseup",
        stop
      );

    }


    document.addEventListener(
      "mousemove",
      resize
    );


    document.addEventListener(
      "mouseup",
      stop
    );

  }


  // =========================================================
  // CONSTRAIN
  // =========================================================

  function constrainSelection() {

    const toolbarSpace = 90;

    const minSize = 50;


    selection.width =
      Math.max(
        minSize,
        Math.min(
          selection.width,
          window.innerWidth
        )
      );


    selection.height =
      Math.max(
        minSize,
        Math.min(
          selection.height,
          window.innerHeight -
          toolbarSpace
        )
      );


    if (selection.x < 0) {

      selection.x = 0;

    }


    if (selection.y < toolbarSpace) {

      selection.y =
        toolbarSpace;

    }


    if (
      selection.x +
      selection.width >
      window.innerWidth
    ) {

      selection.x =
        window.innerWidth -
        selection.width;

    }


    if (
      selection.y +
      selection.height >
      window.innerHeight
    ) {

      selection.y =
        window.innerHeight -
        selection.height;

    }


    if (selection.x < 0) {

      selection.x = 0;

    }


    if (
      selection.y <
      toolbarSpace
    ) {

      selection.y =
        toolbarSpace;

    }

  }


  // =========================================================
  // CAPTURE SCREENSHOT
  // =========================================================

  async function captureScreenshot() {

    if (
      !screenshotVideo ||
      !screenshotCanvas
    ) {

      return;

    }


    try {

      const videoWidth =
        screenshotVideo.videoWidth;

      const videoHeight =
        screenshotVideo.videoHeight;


      if (
        !videoWidth ||
        !videoHeight
      ) {

        throw new Error(
          "Screen dimensions unavailable."
        );

      }
      chatbox.style.visibility = "visible";
screenshotOverlay.style.visibility = "visible";


      await new Promise((r) => setTimeout(r, 120)); // let the live frame update


      const screenWidth =
        window.innerWidth;

      const screenHeight =
        window.innerHeight;


      const scaleX =
        videoWidth /
        screenWidth;

      const scaleY =
        videoHeight /
        screenHeight;


      const sourceX =
        Math.max(
          0,
          selection.x * scaleX
        );


      const sourceY =
        Math.max(
          0,
          selection.y * scaleY
        );


      const sourceWidth =
        Math.min(
          videoWidth - sourceX,
          selection.width * scaleX
        );


      const sourceHeight =
        Math.min(
          videoHeight - sourceY,
          selection.height * scaleY
        );


      if (
        sourceWidth <= 0 ||
        sourceHeight <= 0
      ) {

        throw new Error(
          "Invalid screenshot selection."
        );

      }


      screenshotCanvas.width =
        Math.round(sourceWidth);

      screenshotCanvas.height =
        Math.round(sourceHeight);


      const context =
        screenshotCanvas.getContext("2d");


      context.clearRect(
        0,
        0,
        screenshotCanvas.width,
        screenshotCanvas.height
      );


      context.drawImage(

        screenshotVideo,

        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,

        0,
        0,
        screenshotCanvas.width,
        screenshotCanvas.height

      );


      const imageUrl =
        screenshotCanvas.toDataURL(
          "image/png"
        );


      addScreenshotToMedia(
        imageUrl
      );


      addMessage(
        "📸 Screenshot captured",
        "user"
      );


      stopScreenshot();


      switchToTab("media");


    } catch (error) {

      console.error(
        "Screenshot error:",
        error
      );


      alert(
        "Unable to capture screenshot."
      );

    }

  }


  // =========================================================
  // ADD SCREENSHOT TO MEDIA
  // =========================================================

  function addScreenshotToMedia(imageUrl) {

    const item =
      document.createElement("div");

    item.className =
      "fc-media-item fc-screenshot-item";


    const image =
      document.createElement("img");

    image.src =
      imageUrl;

    image.alt =
      "Screenshot";


    item.appendChild(image);

    mediaGrid.prepend(item);


    item.addEventListener(
      "click",
      () => {

        openImageViewer(imageUrl);

      }
    );

  }


  // =========================================================
  // IMAGE VIEWER
  // =========================================================

  function openImageViewer(imageUrl) {

    const viewer =
      document.createElement("div");

    viewer.className =
      "fc-image-viewer";


    const close =
      document.createElement("button");

    close.className =
      "fc-image-viewer-close";

    close.type = "button";

    close.setAttribute(
      "aria-label",
      "Close image"
    );

    close.textContent = "✕";


    const image =
      document.createElement("img");

    image.src =
      imageUrl;

    image.alt =
      "Screenshot preview";


    viewer.appendChild(close);

    viewer.appendChild(image);

    document.body.appendChild(viewer);


    close.addEventListener(
      "click",
      () => viewer.remove()
    );


    viewer.addEventListener(
      "click",
      (event) => {

        if (
          event.target === viewer
        ) {

          viewer.remove();

        }

      }
    );


    function closeWithEscape(event) {

      if (event.key === "Escape") {

        viewer.remove();

        document.removeEventListener(
          "keydown",
          closeWithEscape
        );

      }

    }


    document.addEventListener(
      "keydown",
      closeWithEscape
    );

  }


  // =========================================================
  // STOP SCREENSHOT
  // =========================================================

  function stopScreenshot() {

  document.removeEventListener(
    "keydown",
    handleScreenshotEscape
  );


  if (screenshotStream) {

    screenshotStream
      .getTracks()
      .forEach((track) => {

        try {
          track.stop();
        } catch (error) {}

      });

  }


  screenshotStream = null;


  if (screenshotVideo) {

    screenshotVideo.pause();

    screenshotVideo.srcObject = null;

  }


  screenshotVideo = null;


  if (screenshotOverlay) {

    screenshotOverlay.remove();

  }


  screenshotOverlay = null;

  screenshotDragging = false;
  screenshotResizing = false;


  // IMPORTANT:
  // Restore the chatbox after screenshot capture/cancel
  chatbox.style.visibility = "visible";
}



  // =========================================================
  // TAB SWITCHING
  // =========================================================

  function switchToTab(selectedTab) {

    tabs.forEach((tab) => {

      tab.classList.toggle(
        "active",
        tab.dataset.tab === selectedTab
      );

    });


    panels.forEach((panel) => {

      panel.classList.toggle(
        "active",
        panel.id === `fc-${selectedTab}`
      );

    });


    inputRow.style.display =
      selectedTab === "chats"
        ? "flex"
        : "none";

  }


  tabs.forEach((tab) => {

    tab.addEventListener(
      "click",
      () => {

        switchToTab(
          tab.dataset.tab
        );

      }
    );

  });


  // =========================================================
  // EVENTS
  // =========================================================

  btn.addEventListener(
    "click",
    toggleChat
  );


  closeBtn.addEventListener(
    "click",
    closeChat
  );


  sendBtn.addEventListener(
    "click",
    sendMessage
  );


  input.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Enter") {

        event.preventDefault();

        sendMessage();

      }

    }
  );


  // =========================================================
  // INITIAL MESSAGE
  // =========================================================

  addMessage(
    "Welcome! How can I help?",
    "bot"
  );

})();
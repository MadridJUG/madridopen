// YouTube video component
class YouTubeVideo extends HTMLElement {
  connectedCallback() {
    const mode = this.dataset.mode;
    
    if (mode === "background") {
      // Auto-play muted for background mode
      this.loadVideo(true);
    } else {
      // Click to play for default mode
      this.addEventListener("click", () => {
        this.loadVideo(false);
      }, { once: true });
    }
  }

  loadVideo(autoplay) {
    this.classList.add("is-loaded");
    const videoId = this.dataset.id;
    const iframe = document.createElement("iframe");
    
    // Build YouTube embed URL with privacy-enhanced mode
    let src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
    
    if (autoplay) {
      src += "&autoplay=1&mute=1&loop=1&playlist=" + videoId;
    } else {
      src += "&autoplay=1";
    }
    
    iframe.src = src;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.frameBorder = "0";
    
    this.innerHTML = "";
    this.appendChild(iframe);
  }
}

customElements.define("top-youtube", YouTubeVideo);

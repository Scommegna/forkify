import View from "./View";
import previewView from "./previewView";

// View for all the bookmarked recipes
class BookmarksView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it.";
  _message = "";

  // Handler to load bookmarks on the beginning to not bug the render of data from local storage
  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  // Renders a list of the bookmarked recipes
  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }
}

export default new BookmarksView();

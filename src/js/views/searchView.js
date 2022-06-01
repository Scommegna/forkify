// View for the search query
class SearchView {
  _parentElement = document.querySelector(".search");

  // Get user search from text input
  getQuery() {
    return this._parentElement.querySelector(".search__field").value;
  }

  // Clear search input value
  _clearInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }

  // Handler function that load recipe query by submiting the value from search input
  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
      this._clearInput();
    });
  }
}

export default new SearchView();

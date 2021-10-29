//  click to view more filter item by type
var btnViewMores = document.querySelectorAll(".btn-view-more");
var listItemMore = document.querySelectorAll(".filter-more-item");
function viewMoreItem() {
  for (let index = 0; index < btnViewMores.length; index++) {
    btnViewMores[index].addEventListener("click", function () {
      this.remove();
      listItemMore[index].classList.add("active");
    });
  }

  
}


"use strict";



/*

  Notice the images on the page header.

  G: The images can be hard-coded in the CSS (as background-image)
  VG: Every time the user selects / unselects one or more filter elements, the app
      shows three random images from all the possible country images.

*/



// Create Filter Elements
create_filters(LEVELS, "level");
create_filters(SUBJECTS, "subject");
create_filters(LANGUAGES, "language");
create_countries_cities_filters();

// Add Interaction of search field button
document.querySelector("#search_field button").addEventListener("click", update_programmes);

// Initialise programmes list by calling relevant function
update_programmes();


// VG
// Add Interaction of filter containers (select-deselect all filters in the container)
// Example: Click anywhere on the language-filter-container and all the language filters
// (spanska, svenska, engelska, franska) will toggle.
const filter_containers = document.querySelectorAll(".filter_container");
array_each(filter_containers, add_group_toggling);

// VG
// Add Interaction of button toggle-all-cities

const toggle_all_cities_button = document.querySelector("#country_filter > button");
toggle_all_cities_button.addEventListener("click", toggle_cities);
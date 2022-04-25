import { BookForm } from "./modules/BookForm.js";
import { library } from './modules/Library.js'
import { DateTime } from "./node_modules/luxon/build/es6/luxon.js";

const todayContainer = document.getElementById('today');
todayContainer.textContent = DateTime.now().toFormat('DDD, tt');

library.render();
new BookForm();


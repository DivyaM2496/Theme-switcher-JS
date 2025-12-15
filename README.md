# 🎨 Theme Changer App

## 📌 Overview

The **Theme Changer App** is a simple JavaScript web application that allows users to switch between **Dark** and **Light** themes by typing their choice into an input field and pressing Enter.

This project is excellent for beginners to practice **DOM manipulation**, **event handling**, and **dynamic styling** in JavaScript.

---

## 🧩 Features

* Change website theme to **Dark** or **Light**
* Dynamically updates background image and heading color
* Provides input validation and alerts for invalid entries

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

---

## ⚙️ How It Works

1. User types **Dark** or **Light** in the input field.
2. Pressing **Enter** triggers the `keydown` event listener.
3. App checks the input value:

   * If **Dark**, sets background image and heading color for dark theme.
   * If **Light**, sets background image and heading color for light theme.
   * If invalid, displays an alert.

---

## 📂 Project Structure

```
theme-changer-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
themeUserInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let input = themeUserInputEl.value;
        if (input === "Dark") {
            bgContainer.style.backgroundImage = "url('dark-theme-bg.png')";
            headingEl.style.color = "#014d40";
        } else if (input === "Light") {
            bgContainer.style.backgroundImage = "url('light-theme-bg.png')";
            headingEl.style.color = "#014d40";
        } else {
            alert("Enter valid theme");
            return;
        }
    }
});
```

---

## 📚 Concepts Covered

* DOM element selection and manipulation
* Event handling (`keydown` event)
* Conditional statements for theme selection
* Dynamic styling with `style` and `backgroundImage`

---

## 🚀 Future Improvements

* Add more theme options
* Enable toggle buttons for theme selection
* Animate theme transitions
* Persist user-selected theme using localStorage
* Validate input case-insensitively

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript DOM manipulation**, **event handling**, and **dynamic styling skills**.

---

⭐ If you find this project useful,

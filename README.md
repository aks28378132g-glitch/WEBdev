# 🎓 Student Report Card System

A responsive, real-time React application for managing student grades. This project allows educators to track student performance, calculate statistics automatically, and manage records through an intuitive interface.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🚀 Features

* **Dynamic Student Registry**: Add students and their marks via a clean form.
* **Automatic Grading**: System automatically determines "Pass" or "Fail" status based on a 40% threshold.
* **Live Statistics**: Real-time calculation of:
    * Total number of students.
    * Class average (Mean).
    * Count of passed and failed students.
* **In-line Editing**: Update existing student marks using an easy edit prompt.
* **Responsive Design**: Optimized for mobile, tablet, and desktop viewing.
* **Persistent Layout**: Sticky table headers for easy navigation of large datasets.

## 🛠️ Technical Highlights

### Responsive UI
The application uses a mix of **Flexbox** and **CSS Clamp** to ensure the interface scales beautifully. The report card container includes a custom scrollbar and a horizontal overflow for mobile users to prevent table breaking.

### Performance Optimization
* **Derived State**: Instead of over-using `useEffect`, the app calculates statistics (mean, pass/fail counts) during the render cycle using `useMemo`.
* **State Management**: Utilizes React Hooks (`useState`) to handle data flow and form inputs efficiently.

## 📂 Project Structure

```text
src/
├── App.jsx        # Main application logic
├── App.css        # Responsive styling and animations
├── data.js        # Initial student dataset
└── main.jsx       # Entry point
```

## ⚙️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/student-report-card.git
    ```
2.  **Install dependencies**
    ```bash
    npm install
    ```
3.  **Run the development server**
    ```bash
    npm run dev
    ```

## 📝 Usage

1.  **Adding a Student**: Enter the name and marks in the bottom form and click "Add".
2.  **Editing Marks**: Click the pencil icon (**✎**) in any row to update that student's marks. The status will update automatically.
3.  **Viewing Stats**: The status bar above the form updates instantly as you modify the data.

---

### 🎨 Customization
To change the passing threshold, navigate to `App.jsx` and update the logic:
```javascript
// Example: Change passing marks to 50
const isPassing = marks >= 50;
```
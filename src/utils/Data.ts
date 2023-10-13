export const BarChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Monthly Earning",
      data: [65, 59, 80, 81, 56, 55, 40, 20, 67, 92, 36, 48],
      backgroundColor: ["#f2efff"],
      borderColor: ["#f2efff"],
      borderWidth: 1,
    },
  ],
};

export const BarChartOptions = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

export const PieChartData = {
  labels: ["New Customers", "Old Customers"],
  datasets: [
    {
      data: [40, 60], // Adjust these values as per your data
      backgroundColor: ["#36A2EB", "#FFCE56"], // Colors for each segment
    },
  ],
};

export const PieChartOptions = {
  responsive: true,
};

export const productData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSudP65ER5TjbDpa7K2-7gIgPtQ3n_IbjqjOwRtJGn8VWHa0U7yNJOehyc6g4UhRmzxNGE&usqp=CAU",
    title: "Running Shoes",
    description:
      "This is a running shoe, best fit for the athletes in their daily life routin",
    stocks: 20,
    price: 20,
    totalSales: 100,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSudP65ER5TjbDpa7K2-7gIgPtQ3n_IbjqjOwRtJGn8VWHa0U7yNJOehyc6g4UhRmzxNGE&usqp=CAU",
    title: "Running Shoes",
    description:
      "This is a running shoe, best fit for the athletes in their daily life routin",
    stocks: 20,
    price: 20,
    totalSales: 100,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSudP65ER5TjbDpa7K2-7gIgPtQ3n_IbjqjOwRtJGn8VWHa0U7yNJOehyc6g4UhRmzxNGE&usqp=CAU",
    title: "Running Shoes",
    description:
      "This is a running shoe, best fit for the athletes in their daily life routin",
    stocks: 20,
    price: 20,
    totalSales: 100,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSudP65ER5TjbDpa7K2-7gIgPtQ3n_IbjqjOwRtJGn8VWHa0U7yNJOehyc6g4UhRmzxNGE&usqp=CAU",
    title: "Running Shoes",
    description:
      "This is a running shoe, best fit for the athletes in their daily life routin",
    stocks: 20,
    price: 20,
    totalSales: 100,
  },
];

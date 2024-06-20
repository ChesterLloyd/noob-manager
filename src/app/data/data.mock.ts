import faker from 'faker'

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const doughnutData = {
  labels: ['Excellent', 'Good', 'Sufficient', 'Minimal'],
  datasets: [
    {
      label: '# of Votes',
      data: [15, 35, 40, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}

export const lineData = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

export const radarData = {
  labels: ['Excellent', 'Good', 'Sufficient', 'Minimal'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
}

export const polarAreaData = {
  labels: [
    'Communication',
    'Collarboration',
    'Adaptability',
    'Problem-Solving',
    'Leadership',
    'Emotional Intelligence',
    'Time Management',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [100, 75, 100, 75, 75, 100, 25],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 235, 0.5)',
        'rgba(255, 126, 64, 0.5)',
      ],
      borderWidth: 1,
      // circular: true,
    },
  ],
}

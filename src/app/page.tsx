'use client'
import Form from '_components/Chat/Chat'

import { doughnutData, lineData, options, polarAreaData, radarData } from './data/data.mock'
import { Doughnut, Line, Radar, PolarArea } from 'react-chartjs-2'
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  RadialLinearScale,
} from 'chart.js'
import Charts from '@/components/Charts/Charts'
Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Filler,
  Legend,
)

export default function Home() {
  return (
    <section className={'hero'}>
      <div className="container">
        <div className="row">
          <Form />
        </div>
        <div className="row">
          <Charts />
        </div>
      </div>
    </section>
  )
}

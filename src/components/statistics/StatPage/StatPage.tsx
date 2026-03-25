import './StatPage.css';
import { StatCard } from '../StatCard/StatCard.tsx';
import { TrainingCount } from '../TrainingCount/TrainingCount.tsx';
import { Streak } from '../Streak/Streak.tsx';
import { TrainingGraph } from '../TrainingGraph/TrainingGraph.tsx';
import { HeatMap } from '../HeatMap/HeatMap.tsx';


export function StatPage() {
   return <div className='page'>
        <StatCard title='Количество тренировок'>
            <TrainingCount />
        </StatCard>
        <StatCard title='Ударный режим'>
            <Streak />
        </StatCard>
        <StatCard title='Активность'>
            <HeatMap />
        </StatCard>
        <StatCard title='График тренировок'>
            <TrainingGraph />
        </StatCard>
    </div>
}
import './StatCard.css';
import type { StatCardProps } from './StatCard.ts';

export function StatCard({ title, children }: StatCardProps) {
    return <div className='card'>
        <h3 className='card-title'>{ title }</h3>
        <div className='card-children'>
            { children }
        </div>
    </div>
}
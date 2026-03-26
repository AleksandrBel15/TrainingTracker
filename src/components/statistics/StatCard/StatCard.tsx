import React from 'react';
import styles from './StatCard.module.css';
import type { StatCardProps } from './StatCard';

function StatCard({ title, children }: StatCardProps) {
    return <div className={styles['card']}>
        <h3 className={styles['card-title']}>{ title }</h3>
        <div className={styles['card-children']}>
            { children }
        </div>
    </div>
}

export default React.memo(StatCard);
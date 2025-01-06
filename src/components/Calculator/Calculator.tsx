import { ReactElement, ReactNode } from 'react';
import './Calculator.css'

export default function Calculator({ children }: { children?: ReactNode}): ReactElement {
    return (
        <div className="calculator">{children}</div>
    )
}
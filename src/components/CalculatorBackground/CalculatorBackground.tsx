import { ReactElement, ReactNode } from 'react';
import './CalculatorBackground.css'

export default function CalculatorBackground({ children }: { children?: ReactNode}): ReactElement {
    return (
        <div className="calculator">{children}</div>
    )
}
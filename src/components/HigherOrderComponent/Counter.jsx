import React, { memo } from 'react';

import hoc from './HigherOrderComponent';

const Counter = memo( ({ count, onCountUp, onCountDown })=> {

        // const { t } = useTranslation()

        return (
            <div className="counter btn-group">
                <button className="btn btn-danger btn-lg" onClick={onCountDown}>-</button>
                <span className="btn btn-secondary btn-lg active">{count}</span>
                <button className="btn btn-success btn-lg" onClick={onCountUp}>+</button>
            </div>
        )
    }
)

export default hoc(Counter);
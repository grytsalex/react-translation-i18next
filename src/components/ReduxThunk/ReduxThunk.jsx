import React, { useRef, useState } from 'react';
import './styles.less';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { getSomeData } from './helpers/utils';

const propTypes = {
  data: PropTypes.array.isRequired,
};

export const ReduxThunk = ({ data }) => {
  const { t } = useTranslation();
  const statusRef = useRef(null);
  const [list, setList] = useState({});

  getSomeData.then((response) => setList(response));
  const arrayList = _.values(list);
  const headesForList = ['userId', 'id', 'title', 'completed'];

  return (
    <div className="team">
      <div
        className="status"
        style={{
          width: '100%',
          height: '200px',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <p ref={statusRef}>...Text</p>
          <hr style={{ width: '200px', textAlign: 'center' }}/>
        </div>
        <div>
          <table style={{ border: '1px solid orange' }}>
            <td style={{ borderRight: '1px solid orange' }}>
              {headesForList.map((item) => <tr><p>{t(`${item}`)}</p></tr>)}
            </td>
            <td>
              {arrayList.map((item) => <tr><p>{item.toString()}</p></tr>)}
            </td>
          </table>
        </div>
      </div>
    </div>
  );
};

ReduxThunk.propTypes = propTypes;

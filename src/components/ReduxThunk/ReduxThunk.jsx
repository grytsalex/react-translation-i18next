import React, { useRef, useState } from 'react';
import './styles.less';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { getSomeData, fetchForThunk } from './helpers/utils';

const propTypes = {
  users: PropTypes.array.isRequired,
  thunkAsyncDataFetch: PropTypes.func.isRequired,
};

export const ReduxThunk = ({ users, thunkAsyncDataFetch }) => {
  const { t } = useTranslation();
  const statusRef = useRef(null);
  const [list, setList] = useState({});

  getSomeData.then((response) => setList(response));
  const arrayList = _.values(list);
  const headesForList = ['userId', 'id', 'title', 'completed'];

  console.log(users);

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
        <div style={{ paddingBottom: '20px' }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={thunkAsyncDataFetch}
          >
            {t('getUsers')}
          </button>
        </div>
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ borderRight: '1px solid orange', paddingRight: '10px', boxSizing: 'border-box' }}>
            {headesForList.map((item, index) => <p key={index}>{t(`${item}`)}</p>)}
          </div>
          <div style={{ paddingLeft: '10px' }}>
            {arrayList.map((item, index) => <p key={index}>{item.toString()}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

ReduxThunk.propTypes = propTypes;

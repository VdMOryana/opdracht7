import React, { useState } from 'react';
import styles from '@/styles/Help.module.css';

const OptionsList = () => {
  const [options, setOptions] = useState([
    { id: 1, label: 'Gevandaliseerd', checked: false },
    { id: 2, label: 'Vuil station', checked: false },
  ]);

  const handleToggle = (optionId) => {
    const updatedOptions = options.map((option) =>
      option.id === optionId ? { ...option, checked: !option.checked } : option
    );
    setOptions(updatedOptions);
  };

  return (
    <div className={styles.optionsList}>
      {options.map((option) => (
        <label key={option.id} className={styles.optionLabel}>
          <input
            type="checkbox"
            checked={option.checked}
            onChange={() => handleToggle(option.id)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default OptionsList;
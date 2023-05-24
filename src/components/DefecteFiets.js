import React, { useState } from 'react';
import styles from '@/styles/Help.module.css';

const OptionsList = () => {
  const [options, setOptions] = useState([
    { id: 1, label: 'Banden', checked: false },
    { id: 2, label: 'Bel', checked: false },
    { id: 3, label: 'Cardan / ketting', checked: false },
    { id: 4, label: 'Lichten', checked: false },
    { id: 5, label: 'Remmen', checked: false },
    { id: 6, label: 'Versnellingen', checked: false },
    { id: 7, label: 'Vuil', checked: false },
    { id: 8, label: 'Zadel', checked: false },
    { id: 9, label: 'Andere', checked: false },
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

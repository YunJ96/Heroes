import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userSearchApi from '../../api/userSearchApi';
import './styles.scss';

function Search() {
  const [characterName, setCharacterName] = useState('');
  const navigation = useNavigate();

  const handleSearch = () => {
    userSearchApi(characterName);
    navigation('/info');
  };

  return (
    <div className='search-user-input'>
      <input
        type='text'
        placeholder='유저명을 입력해주세요.'
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}

export default Search;

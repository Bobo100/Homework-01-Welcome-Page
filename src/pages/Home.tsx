import { useState } from "react";
import { InputText } from "./component/InputText";
import { BtnSubmit } from "./component/BtnSubmit";
import "./css/Home.css";
export const Home = () => {

    const [inputText, setInputText] = useState('');
    const handleInput = (value: string) => {
        setInputText(value);
    };

    const [labelText, setLabelText] = useState('');
    const handleSearch = (value: string) => {
        setLabelText(value);
    };


    // 設定Enter可以觸發搜尋
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch(inputText);
        }
    };


    return (
        <div className="home">
            <label htmlFor="search">Welcom {labelText}</label>
            <InputText value={inputText} onChange={handleInput} onKeyPress={handleKeyDown} />
            <BtnSubmit value={inputText} onClick={handleSearch} />
        </div>
    );
};
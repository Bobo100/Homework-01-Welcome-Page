import { useState } from "react";
import { InputText } from "./component/InputText";
import { BtnSubmit } from "./component/BtnSubmit";
import "./css/Home.css";
import { InputTextLimitLength, InputTextOnlyAlphabet, InputTextOnlyNumber } from "./component/InputTextWithRegex";
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

    // Regex的部分，請參考InputTextWithRegex.tsx
    const [inputTextOnlyNumber, setInputTextOnlyNumber] = useState('');
    const handleInputTextOnlyNumber = (value: string) => {
        setInputTextOnlyNumber(value);
    };

    const [inputTextOnlyAlphabet, setInputTextOnlyAlphabet] = useState('');
    const handleInputTextOnlyAlphabet = (value: string) => {
        setInputTextOnlyAlphabet(value);
    };

    const [inputTextLimitLength, setInputTextLimitLength] = useState('');
    const handleInputTextLimitLength = (value: string) => {
        setInputTextLimitLength(value);
    };


    return (
        <div className="home">
            <label htmlFor="search">Welcom {labelText}</label>
            <InputText value={inputText} onChange={handleInput} onKeyPress={handleKeyDown} />
            <BtnSubmit value={inputText} onClick={handleSearch} />

            <h3>測試輸入限制</h3>
            <p>Only數字</p>
            <InputTextOnlyNumber value={inputTextOnlyNumber} onChange={handleInputTextOnlyNumber} onKeyPress={handleKeyDown} />
            <p>Only英文</p>
            <InputTextOnlyAlphabet value={inputTextOnlyAlphabet} onChange={handleInputTextOnlyAlphabet} onKeyPress={handleKeyDown} />
            <p>限制字數</p>
            <InputTextLimitLength value={inputTextLimitLength} onChange={handleInputTextLimitLength} onKeyPress={handleKeyDown} />
            <p>特殊規則，第二個字要大寫，第三個字要數字</p>
        </div>
    );
};
import { useState } from "react";
import { InputText } from "./component/InputText";
import { BtnSubmit } from "./component/BtnSubmit";
import "./css/Home.css";
import { InputTextLimitLength, InputTextOnlyAlphabet, InputTextOnlyNumber, InputTextSpecialRule } from "./component/InputTextWithRegex";
export const Home = () => {

    const [inputText, setInputText] = useState('');
    const handleInputChange = (value: string) => {
        setInputText(value);
    };

    const [labelText, setLabelText] = useState('');
    const handleSubmit = (value: string) => {
        setLabelText(value);
    };


    // 設定Enter可以觸發搜尋
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit(inputText);
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

    const [inputTextSpecialRule, setInputTextSpecialRule] = useState('');
    const handleInputTextSpecialRule = (value: string) => {
        setInputTextSpecialRule(value);
    };

    return (
        <div className="home">
            <label htmlFor="search">Welcom {labelText}</label>
            <InputText value={inputText} onChange={handleInputChange} onKeyPress={handleKeyDown} />
            <BtnSubmit value={inputText} onClick={handleSubmit} />

            <h3>測試輸入限制</h3>
            <p>Only數字</p>
            <InputTextOnlyNumber value={inputTextOnlyNumber} onChange={handleInputTextOnlyNumber} onKeyPress={handleKeyDown} />
            <p>Only英文</p>
            <InputTextOnlyAlphabet value={inputTextOnlyAlphabet} onChange={handleInputTextOnlyAlphabet} onKeyPress={handleKeyDown} />
            <p>限制字數</p>
            <InputTextLimitLength value={inputTextLimitLength} onChange={handleInputTextLimitLength} onKeyPress={handleKeyDown} />
            <p>特殊規則，第一個字英文(大小寫沒限制)，第二個字要數字，第三個字要英文小寫，並且我們限制只能輸入三個字</p>
            <InputTextSpecialRule value={inputTextSpecialRule} onChange={handleInputTextSpecialRule} onKeyPress={handleKeyDown} />
        </div>
    );
};
import React from "react";

// 建立一個input的元件
interface InputTextProps {
    value: string;
    onChange: (value: string) => void;
    onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * 
 * @param value input的值 
 * @param onChange 設定input的值
 * @returns 
 */
export const InputTextOnlyNumber: React.FC<InputTextProps> = ({ value, onChange, onKeyPress }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9\b]+$/;
        // ^：字串開頭；[0-9]：數字；\b：退格；+：至少一次
        // 這邊的意思是，只要輸入的字串是數字或是退格，就可以輸入
        if (event.target.value === '' || regex.test(event.target.value)) {
            onChange(event.target.value);
        }
    };

    return (
        <input type="text" value={value} onChange={handleInputChange} onKeyDown={onKeyPress} placeholder="請輸入想找的內容" />

    );
};

// 只能接收英文
export const InputTextOnlyAlphabet: React.FC<InputTextProps> = ({ value, onChange, onKeyPress }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[a-zA-Z\b]+$/;
        // ^：字串開頭；[0-9]：數字；\b：退格；+：至少一次
        // 這邊是只要輸入的字串是英文或是退格，就可以輸入
        if (event.target.value === '' || regex.test(event.target.value)) {
            onChange(event.target.value);
        }
    };
    return (
        <input type="text" value={value} onChange={handleInputChange} onKeyDown={onKeyPress} placeholder="請輸入想找的內容" />

    );
};

// 限制字數
export const InputTextLimitLength: React.FC<InputTextProps> = ({ value, onChange, onKeyPress }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //小於等於3個字
        if (event.target.value === '' || event.target.value.length <= 3) {
            onChange(event.target.value);
        }
    };
    return (
        <input type="text" value={value} onChange={handleInputChange} onKeyDown={onKeyPress} placeholder="請輸入想找的內容" />
    );
};


//特殊規則，第一個字沒有限制，第二個字要英文大寫，第三個字要數字，第四個字要英文小寫，然後在限制字數
export const InputTextSpecialRule: React.FC<InputTextProps> = ({ value, onChange, onKeyPress }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[A-Z][A-Z]\d[a-z]$/;
        console.log(event.target.value)
        if ((event.target.value === '' || regex.test(event.target.value)) && event.target.value.length <= 4) {
            onChange(event.target.value);
        }
    };
    return (
        <input type="text" value={value} onChange={handleInputChange} onKeyDown={onKeyPress} placeholder="請輸入想找的內容" />
    );
};

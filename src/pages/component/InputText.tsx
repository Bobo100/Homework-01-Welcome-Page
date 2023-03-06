import React from "react";

// 建立一個input的元件
interface SearchProps {
    value: string;
    onChange: (value: string) => void;
    onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const InputText: React.FC<SearchProps> = ({ value, onChange, onKeyPress }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <input type="text" value={value} onChange={handleInputChange} onKeyDown={onKeyPress} placeholder="請輸入想找的內容" />

    );
};

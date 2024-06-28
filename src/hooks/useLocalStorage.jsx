cls
import {useEffect, useState} from "react";

const useLocalStorage = () => {

    //Info Component
    const [Name, setName] = useState(localStorage.getItem('Name') || '');
    const [email, setEmail] = useState(localStorage.getItem('email') || ' ');
    const [telephone, setTelephone] = useState(localStorage.getItem('Telephone') || ' ');


    const [total, setTotal] = useState(Number(localStorage.getItem('total') || 0))

    //Plan Component
    const [arcade, setArcade] = useState(false);
    const [advanced, setAdvanced] = useState(false);
    const [pro, setPro] = useState(false);
    const [togglebutton, setToggleBtn] = useState(JSON.parse(localStorage.getItem('duration') === 'Year'))
    const [choice, setChoice] = useState(null)

    const [activeButton, setActiveButton] = useState(JSON.parse(localStorage.getItem('active')) || 'Arcade')
    const [price, setPrice] = useState(localStorage.getItem('price'))

    const handleChoiceClicked = (value) => {
        setActiveButton(value)
        localStorage.setItem('active', JSON.stringify(value))
        if (value == "Arcade") {
            const d = Number(total + arcadePrice)
            setPrice(localStorage.setItem('price', arcadePrice))
            localStorage.setItem('total', d)
        } else if (value == "Advanced") {
            setPrice(localStorage.setItem('price', advancedPrice))
            const d = Number(total + advancedPrice)
            localStorage.setItem('total', d)
        } else if (value == "Pro") {
            setPrice(localStorage.setItem('price', proPrice))
            const d = Number(total + proPrice);
            localStorage.setItem('total', d)
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleChecked = () => {
        setToggleBtn(!togglebutton)
        localStorage.setItem('duration', !togglebutton ? 'Year' : 'Month')
    }
    const arcadePrice = "1000";
    const advancedPrice = "1500";
    const proPrice = "2000";
    const onlinePrice = 200;
    const storagePrice = 500;
    const customizablePrice = 200;

    //Adds Component
    const [serviceCheckbox, setServiceCheckbox] = useState(JSON.parse(localStorage.getItem('ServiceChecked')) || false)
    const [storageCheckbox, setStorageCheckbox] = useState(JSON.parse(localStorage.getItem('StorageChecked')) || false)
    const [customizableCheckbox, setCustomizableCheckbox] = useState(JSON.parse(localStorage.getItem('CustomizableChecked')) || false)

    function addToTotal(val) {

        if (serviceCheckbox) {
            setTotal(total - val)
            localStorage()
        } else {
            setTotal(total + val)
        }
    }

    const handleServiceCheckedBox = (val) => {
        if (serviceCheckbox) {
            const d = Number(total - val)
            setTotal(d)
            localStorage.setItem('total', d)
        } else {
            const d = Number(total + val)
            setTotal(d)
            localStorage.setItem('total', d)
        }
        setServiceCheckbox(!serviceCheckbox)
        localStorage.setItem('ServiceChecked', !serviceCheckbox)

    }
    const handleStorageCheckedBox = (val) => {
        if (storageCheckbox) {
            const d = Number(total - val)
            setTotal(d)
            localStorage.setItem('total', total - d)
        } else {
            const d = Number(total + val)
            setTotal(d)
            localStorage.setItem('total', d)
        }
        setStorageCheckbox(!storageCheckbox)
        localStorage.setItem('StorageChecked', !storageCheckbox)
    }
    const handleCustomizableCheckedBox = (val) => {
        if (customizableCheckbox) {
            setTotal(total - val)
            localStorage.setItem('total', total - val)
        } else {
            setTotal(total + val)
            localStorage.setItem('total', total + val)
        }

        setCustomizableCheckbox(!customizableCheckbox)
        localStorage.setItem('CustomizableChecked', !customizableCheckbox)
    }


    //Summary Component
    const changePlan = () => {
        handleChecked()
    }

    const [durationVal, setDurationVal] = useState(localStorage.getItem('duration'))

    useEffect(() => {
        setDurationVal(localStorage.getItem('duration'))
    }, [handleChecked, serviceCheckbox, storageCheckbox, customizableCheckbox])

    return {
        total,
        durationVal,
        price,
        handleChoiceClicked,
        activeButton,
        setActiveButton,
        arcadePrice,
        customizablePrice,
        storagePrice,
        onlinePrice,
        proPrice,
        advancedPrice,
        choice,
        setChoice,
        changePlan,
        togglebutton,
        handleChecked,
        arcade,
        setArcade,
        advanced,
        setAdvanced,
        pro,
        setPro,
        serviceCheckbox,
        storageCheckbox,
        customizableCheckbox,
        handleServiceCheckedBox,
        handleCustomizableCheckedBox,
        addToTotal,
        handleStorageCheckedBox,
        Name,
        setName,
        email,
        setEmail,
        telephone,
        setTelephone
    }
}

export default useLocalStorage;
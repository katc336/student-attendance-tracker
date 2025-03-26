type SwitchForm = {
    icon: any
    setChange: any
    buttonName: string
}

type Card = {
    icon: any
    text: string
    number: number
    addIcon: any
}

interface AddPopUpProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

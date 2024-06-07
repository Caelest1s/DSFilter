import { useContext } from 'react';
import { ContextCountItem } from '../../utils/context-count';
import './style.css';

export default function HeaderClient() {

    const { contextCountItem } = useContext(ContextCountItem);

    return (
        <header className='dsc-header'>
            <div className='dsc-header-title'>
                <div className='dsc-main-title'>DSFilter</div>
                {
                    contextCountItem > 0 &&
                    <div className="dsc-title-product">
                        {contextCountItem} Produto(s)
                    </div>
                }
            </div>
        </header>
    );
}

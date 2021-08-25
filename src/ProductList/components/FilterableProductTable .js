import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { getProductList } from '../utils'

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filteWord: '',
            isStocked: false
        }
    }

    filteWordChange = (filteWord) => {
        this.setState({
            filteWord
        })
    }

    isStockedChange = (isStocked) => {
        this.setState({
            isStocked
        })
    }

    async componentDidMount() {
        const arr = await getProductList();
        console.log(arr);
        this.setState({
            products: arr
        })
    }

    render() {
        const { filteWord, isStocked, products } = this.state;
        return (
            <div>
                <SearchBar filteWord={filteWord} isStocked={isStocked} onInputChange={this.filteWordChange} onCheckboxChange={this.isStockedChange} />
                <ProductTable products={products} filteWord={filteWord} isStocked={isStocked} />
            </div>
        )
    }
}

export default FilterableProductTable;
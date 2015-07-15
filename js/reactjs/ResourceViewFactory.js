import * as React from 'react';
import {isArray, map} from 'lodash';
import {TdFactory} from 'modules/common/components/react/table/TdFactory.js';
import {ResourceViewTranslator} from './ResourceViewTranslator.js';

/**
 * Фабрика элемента просмотра ресурса
 */
export class ResourceViewFactory {

    /**
     * создать элемент просмотра ресурса
     *
     * @returns {ReactClass}
     */
    static create(data) {
        let resourceViewTable = React.createClass({
            render() {
                return (
                    <table className='table table-striped table-condensed table-hover'>
                        <tbody>{map(this.props.data, ResourceViewFactory.createTr)}</tbody>
                    </table>
                );
            }
        });

        return React.createElement(resourceViewTable, {data: data});
    }

    /**
     * Создать tr элементы
     */
    static createTr(value, key) {
        let resourceViewTranslator = new ResourceViewTranslator(),
            th = React.DOM.th(null, resourceViewTranslator.getTranslated(key)),
            td = React.createElement(TdFactory.create(), {data: value});

        return React.DOM.tr(null, th, td);
    }
}
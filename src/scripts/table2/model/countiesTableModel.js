import { TableModel } from '../../table1/model/tableModel';

const tableModel = new TableModel();
// eslint-disable-next-line import/prefer-default-export
export class CountriesTableModel {
    // eslint-disable-next-line class-methods-use-this
    tableConnect(val) {
        if (sessionStorage.getItem('country')) {
            if (val === 'Total confirmed' || val === 'Total death' || val === 'Total recovered') {
                tableModel.getMoodTable('Total');
                document.getElementById('selectMoodShow').value = 'Total';
            } else if (val === 'New confirmed' || val === 'New death' || val === 'New recovered') {
                tableModel.getMoodTable('New');
                document.getElementById('selectMoodShow').value = 'New';
            } else if (val === 'Total confirmed 100K' || val === 'Total death 100K' || val === 'Total recovered 100K') {
                tableModel.getMoodTable('Total per 100K population');
                document.getElementById('selectMoodShow').value = 'Total per 100K population';
            } else if (val === 'New confirmed 100K' || val === 'New death 100K' || val === 'New recovered 100K') {
                tableModel.getMoodTable('New per 100K population');
                document.getElementById('selectMoodShow').value = 'New per 100K population';
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (val === 'Total confirmed' || val === 'Total death' || val === 'Total recovered') {
                tableModel.getMoodTable('Total');
                document.getElementById('selectMoodShow').value = 'Total';
            } else if (val === 'New confirmed' || val === 'New death' || val === 'New recovered') {
                tableModel.getMoodTable('New');
                document.getElementById('selectMoodShow').value = 'New';
            } else if (val === 'Total confirmed 100K' || val === 'Total death 100K' || val === 'Total recovered 100K') {
                tableModel.getMoodTable('Total per 100K population');
                document.getElementById('selectMoodShow').value = 'Total per 100K population';
            } else if (val === 'New confirmed 100K' || val === 'New death 100K' || val === 'New recovered 100K') {
                tableModel.getMoodTable('New per 100K population');
                document.getElementById('selectMoodShow').value = 'New per 100K population';
            }
        }
    }
}

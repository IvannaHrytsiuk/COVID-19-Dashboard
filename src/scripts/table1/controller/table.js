import { TableModel } from '../model/tableModel';

document.getElementById('selectMoodShow').addEventListener('change', () => {
    const tableModel = new TableModel();
    console.log(document.getElementById('selectMoodShow').value);
    tableModel.getMoodTable(document.getElementById('selectMoodShow').value);
});

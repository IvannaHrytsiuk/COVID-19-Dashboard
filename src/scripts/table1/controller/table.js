import { TableControll } from '../model/tableControll';

document.getElementById('selectMoodShow').addEventListener('change', () => {
    const tableControll = new TableControll();
    console.log(document.getElementById('selectMoodShow').value);
    tableControll.getMoodTable(document.getElementById('selectMoodShow').value);
});

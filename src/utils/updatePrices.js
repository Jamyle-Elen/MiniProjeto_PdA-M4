import cron from 'node-cron';
import connection from '../config/database.js';

const checkExpiryDates = () => {
    const sql = `
    UPDATE items SET price = 1.99 WHERE DATEDIFF(expiry_date, CURDATE()) <= 15
    `
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Erro ao atualizar preços:', err);
        } else {
            console.log('Preços atualizados com sucesso:', results);
        }
    });
};

cron.schedule('0 0 * * *', () => {
    console.log('Inspeção para verificar qualidade dos produtos...');
    checkExpiryDates();
});

export default checkExpiryDates;

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Amigos', [
      {
        nome: 'Ana Silva',
        email: 'ana.silva@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Bruno Costa',
        email: 'bruno.costa@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Carlos Mendes',
        email: 'carlos.mendes@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Daniela Rocha',
        email: 'daniela.rocha@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Eduardo Lima',
        email: 'eduardo.lima@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Fernanda Alves',
        email: 'fernanda.alves@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Gabriel Nunes',
        email: 'gabriel.nunes@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Helena Martins',
        email: 'helena.martins@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Igor Pereira',
        email: 'igor.pereira@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Juliana Torres',
        email: 'juliana.torres@email.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Amigos', null, {});
  }
};

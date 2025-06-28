'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports', [
    {
      name:"Sardar Vallabhbhai Patel International Airport",
      cityId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:"Kempagowda International Airport",
      cityId:37,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:"Chatrapati Shivaji International Airport",
      cityId:33,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:"Mysuru Airport",
      cityId:37,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:"Mengaluru International Airport",
      cityId:37,
      createdAt:new Date(),
      updatedAt:new Date()
    },
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    
    
await queryInterface.bulkDelete('Airports', {
      name: [
        "Sardar Vallabhbhai Patel International Airport",
        "Kempagowda International Airport",
        "Chatrapati Shivaji International Airport",
        "Mysuru Airport",
        "Mengaluru International Airport"

      ]
    }, {});
  }
};

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
  {id: 1, title: 'Project 1', body: 'Worked on ___ blank', experience: "Learned x and x"},
  {id: 2, title: 'Project 2', body: 'Worked on ___ blank', experience: "Learned x and x"},
  {id: 3, title: 'Project 3', body: 'Worked on ___ blank', experience: "Learned x and x"}
  ];
  }
});

import Ember from 'ember';

export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
    Ember.$.ajaxSetup({
    headers: {

      //Weston's keys

      // "X-Parse-Application-Id": "En0HvlSzhghm8rQbbxEudy4jff7J84lvC7C2tWKh",
      // "X-Parse-REST-API-Key": "B9DuWgGoXgSD5SS8Dktluut9E73E25qba1sDJL09"

      //Beth's parse keys for testing
      "X-Parse-Application-Id": "Cg7ixMBSyHJ7SsGTqXxUkE27s6PwNevbovd1RaG1",
      "X-Parse-REST-API-Key": "JzKJm6qSleHdYUXIiAMetmC6ruZYHoqsiHrm4Z8y"



    }
  });
}

export default {
  name: 'parse-token',
  initialize: initialize,
};


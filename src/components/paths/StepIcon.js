import React from 'react';

const StepIcon = ({type}) => {
  let icon;
  switch(type) {
    case 'video':
    icon = 'fas fa-video';
    break;

    case 'wiki':
    icon = 'fab fa-wikipedia-w';
    break;

    case 'book':
    icon = 'fas fa-book';
    break;

    case 'article':
    case 'blog':
    icon = 'far fa-newspaper';
    break;

    case 'project':
    icon = 'fas fa-wrench';
    break;

    default:
    icon = 'video';
  }
  return (
    <i className={icon}></i>
  );
};

export default StepIcon;

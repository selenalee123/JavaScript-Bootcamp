const day = 'monday';

switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meet up');
        break;
    case 'tuesday':
        console.log('Prepare interview');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;

    case 'friday':
        console.log('record video');
        break;

    case 'saturday':
        console.log('enjoy the weekend');
        break;
    case 'sunday':
        console.log('rest la ');
    default:
        console.log('not a valid day');
    }


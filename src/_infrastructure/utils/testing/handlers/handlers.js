
import { http, HttpResponse, delay } from 'msw';
// posts are not available inside http.get()
import posts from '@inf/utils/testing/data/posts';

const http_success = http.get('https://jsonplaceholder.typicode.com/posts', async () => {
  let fakeData = [
    {
      userId: 1,
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
      userId: 2,
      id: 11,
      title: "et ea vero quia laudantium autem",
      body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    }
  ]
  await delay(100)
  return HttpResponse.json( fakeData )
});

const http_failed = http.get('https://jsonplaceholder.typicode.com/posts', async () => {
  await delay(100)
  //return new HttpResponse( null, { status: 404 } );
  return HttpResponse.error();
});

export const get_success = http_success;
export const get_failed = http_failed;

export const handlers = [ get_success, get_failed ];

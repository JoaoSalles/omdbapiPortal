export type MovieType = {
    Poster: string,
    Type: string,
    Year: string,
    imdbID: string,
    Title: string
}

export type SearchResultType = Array<MovieType>;

interface HttpResponse<T> extends Response {
    parsedBody?: T;
  }

export async function http<T>(
    request: RequestInfo
  ): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(
      request
    );
    response.parsedBody = await response.json();
    return response;
}
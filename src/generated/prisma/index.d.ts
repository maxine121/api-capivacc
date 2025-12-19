
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model VacinacaoBairro
 * 
 */
export type VacinacaoBairro = $Result.DefaultSelection<Prisma.$VacinacaoBairroPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Vacina
 * 
 */
export type Vacina = $Result.DefaultSelection<Prisma.$VacinaPayload>
/**
 * Model VacinacaoUsuario
 * 
 */
export type VacinacaoUsuario = $Result.DefaultSelection<Prisma.$VacinacaoUsuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BairrosRecife: {
  AFLITOS: 'AFLITOS',
  AFOGADOS: 'AFOGADOS',
  AGUA_FRIA: 'AGUA_FRIA',
  ALTO_JOSE_BONIFACIO: 'ALTO_JOSE_BONIFACIO',
  ALTO_JOSE_DO_PINHO: 'ALTO_JOSE_DO_PINHO',
  ALTO_DO_MANDU: 'ALTO_DO_MANDU',
  ALTO_DO_PASCOAL: 'ALTO_DO_PASCOAL',
  ALTO_SANTA_TEREZINHA: 'ALTO_SANTA_TEREZINHA',
  APIPUCOS: 'APIPUCOS',
  AREIAS: 'AREIAS',
  ARRUDA: 'ARRUDA',
  BARRO: 'BARRO',
  BEBERIBE: 'BEBERIBE',
  BENFICA: 'BENFICA',
  BOA_VIAGEM: 'BOA_VIAGEM',
  BOA_VISTA: 'BOA_VISTA',
  BOMBA_DO_HEMETERIO: 'BOMBA_DO_HEMETERIO',
  BONGI: 'BONGI',
  BRASILIA_TEIMOSA: 'BRASILIA_TEIMOSA',
  BREJO_DO_BEBERIBE: 'BREJO_DO_BEBERIBE',
  BREJO_DA_GUABIRABA: 'BREJO_DA_GUABIRABA',
  CABANGA: 'CABANGA',
  CACOTE: 'CACOTE',
  CAJUEIRO: 'CAJUEIRO',
  CAMPINA_DO_BARRETO: 'CAMPINA_DO_BARRETO',
  CAMPO_GRANDE: 'CAMPO_GRANDE',
  CASA_AMARELA: 'CASA_AMARELA',
  CASA_FORTE: 'CASA_FORTE',
  CAXANGA: 'CAXANGA',
  CIDADE_UNIVERSITARIA: 'CIDADE_UNIVERSITARIA',
  COELHOS: 'COELHOS',
  COHAB: 'COHAB',
  COQUE: 'COQUE',
  COQUEIRAL: 'COQUEIRAL',
  CORDEIRO: 'CORDEIRO',
  CORREGO_DO_JENIPAPO: 'CORREGO_DO_JENIPAPO',
  CURADO: 'CURADO',
  DERBY: 'DERBY',
  DOIS_IRMAOS: 'DOIS_IRMAOS',
  DOIS_UNIDOS: 'DOIS_UNIDOS',
  ENCRUZILHADA: 'ENCRUZILHADA',
  ENGENHO_DO_MEIO: 'ENGENHO_DO_MEIO',
  ENTRA_A_PULSO: 'ENTRA_A_PULSO',
  ESPINHEIRO: 'ESPINHEIRO',
  ESTANCIA: 'ESTANCIA',
  FUNDAO: 'FUNDAO',
  GRACAS: 'GRACAS',
  GUABIRABA: 'GUABIRABA',
  HIPODROMO: 'HIPODROMO',
  IBURA: 'IBURA',
  ILHA_JOANA_BEZERRA: 'ILHA_JOANA_BEZERRA',
  ILHA_DO_LEITE: 'ILHA_DO_LEITE',
  ILHA_DO_RETIRO: 'ILHA_DO_RETIRO',
  IMBIRIBEIRA: 'IMBIRIBEIRA',
  IPSEP: 'IPSEP',
  IPUTINGA: 'IPUTINGA',
  JAQUEIRA: 'JAQUEIRA',
  JARDIM_SAO_PAULO: 'JARDIM_SAO_PAULO',
  JIQUIA: 'JIQUIA',
  JORDAO: 'JORDAO',
  LINHA_DO_TIRO: 'LINHA_DO_TIRO',
  MACAXEIRA: 'MACAXEIRA',
  MADALENA: 'MADALENA',
  MANGABEIRA: 'MANGABEIRA',
  MANGUEIRA: 'MANGUEIRA',
  MONTEIRO: 'MONTEIRO',
  MORRO_DA_CONCEICAO: 'MORRO_DA_CONCEICAO',
  MUSTARDINHA: 'MUSTARDINHA',
  NOVA_DESCOBERTA: 'NOVA_DESCOBERTA',
  PAISSANDU: 'PAISSANDU',
  PARNAMIRIM: 'PARNAMIRIM',
  PASSARINHO: 'PASSARINHO',
  PAU_FERRO: 'PAU_FERRO',
  PEIXINHOS: 'PEIXINHOS',
  PINA: 'PINA',
  POCO_DA_PANELA: 'POCO_DA_PANELA',
  PONTE_D_UCHOA: 'PONTE_D_UCHOA',
  PONTO_DE_PARADA: 'PONTO_DE_PARADA',
  PORTO_DA_MADEIRA: 'PORTO_DA_MADEIRA',
  PRADO: 'PRADO',
  RECIFE: 'RECIFE',
  ROSARINHO: 'ROSARINHO',
  SAN_MARTIN: 'SAN_MARTIN',
  SANCHO: 'SANCHO',
  SANTANA: 'SANTANA',
  SANTO_AMARO: 'SANTO_AMARO',
  SANTO_ANTONIO: 'SANTO_ANTONIO',
  SAO_JOSE: 'SAO_JOSE',
  SITIO_DOS_PINTOS: 'SITIO_DOS_PINTOS',
  SOLEDADE: 'SOLEDADE',
  TAMARINEIRA: 'TAMARINEIRA',
  TEJIPIO: 'TEJIPIO',
  TORRE: 'TORRE',
  TORREAO: 'TORREAO',
  TORROES: 'TORROES',
  TOTO: 'TOTO',
  VARZEA: 'VARZEA',
  VASCO_DA_GAMA: 'VASCO_DA_GAMA',
  ZUMBI: 'ZUMBI'
};

export type BairrosRecife = (typeof BairrosRecife)[keyof typeof BairrosRecife]

}

export type BairrosRecife = $Enums.BairrosRecife

export const BairrosRecife: typeof $Enums.BairrosRecife

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more VacinacaoBairros
 * const vacinacaoBairros = await prisma.vacinacaoBairro.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more VacinacaoBairros
   * const vacinacaoBairros = await prisma.vacinacaoBairro.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.vacinacaoBairro`: Exposes CRUD operations for the **VacinacaoBairro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VacinacaoBairros
    * const vacinacaoBairros = await prisma.vacinacaoBairro.findMany()
    * ```
    */
  get vacinacaoBairro(): Prisma.VacinacaoBairroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vacina`: Exposes CRUD operations for the **Vacina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vacinas
    * const vacinas = await prisma.vacina.findMany()
    * ```
    */
  get vacina(): Prisma.VacinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vacinacaoUsuario`: Exposes CRUD operations for the **VacinacaoUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VacinacaoUsuarios
    * const vacinacaoUsuarios = await prisma.vacinacaoUsuario.findMany()
    * ```
    */
  get vacinacaoUsuario(): Prisma.VacinacaoUsuarioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    VacinacaoBairro: 'VacinacaoBairro',
    Usuario: 'Usuario',
    Vacina: 'Vacina',
    VacinacaoUsuario: 'VacinacaoUsuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "vacinacaoBairro" | "usuario" | "vacina" | "vacinacaoUsuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      VacinacaoBairro: {
        payload: Prisma.$VacinacaoBairroPayload<ExtArgs>
        fields: Prisma.VacinacaoBairroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VacinacaoBairroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoBairroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VacinacaoBairroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoBairroPayload>
          }
          findFirst: {
            args: Prisma.VacinacaoBairroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoBairroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VacinacaoBairroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoBairroPayload>
          }
          findMany: {
            args: Prisma.VacinacaoBairroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoBairroPayload>[]
          }
          create: {
            args: Prisma.VacinacaoBairroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoBairroPayload>
          }
          createMany: {
            args: Prisma.VacinacaoBairroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VacinacaoBairroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoBairroPayload>[]
          }
          delete: {
            args: Prisma.VacinacaoBairroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoBairroPayload>
          }
          update: {
            args: Prisma.VacinacaoBairroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoBairroPayload>
          }
          deleteMany: {
            args: Prisma.VacinacaoBairroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VacinacaoBairroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VacinacaoBairroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoBairroPayload>[]
          }
          upsert: {
            args: Prisma.VacinacaoBairroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoBairroPayload>
          }
          aggregate: {
            args: Prisma.VacinacaoBairroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVacinacaoBairro>
          }
          groupBy: {
            args: Prisma.VacinacaoBairroGroupByArgs<ExtArgs>
            result: $Utils.Optional<VacinacaoBairroGroupByOutputType>[]
          }
          count: {
            args: Prisma.VacinacaoBairroCountArgs<ExtArgs>
            result: $Utils.Optional<VacinacaoBairroCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Vacina: {
        payload: Prisma.$VacinaPayload<ExtArgs>
        fields: Prisma.VacinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VacinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VacinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinaPayload>
          }
          findFirst: {
            args: Prisma.VacinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VacinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinaPayload>
          }
          findMany: {
            args: Prisma.VacinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinaPayload>[]
          }
          create: {
            args: Prisma.VacinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinaPayload>
          }
          createMany: {
            args: Prisma.VacinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VacinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinaPayload>[]
          }
          delete: {
            args: Prisma.VacinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinaPayload>
          }
          update: {
            args: Prisma.VacinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinaPayload>
          }
          deleteMany: {
            args: Prisma.VacinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VacinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VacinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinaPayload>[]
          }
          upsert: {
            args: Prisma.VacinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinaPayload>
          }
          aggregate: {
            args: Prisma.VacinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVacina>
          }
          groupBy: {
            args: Prisma.VacinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VacinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VacinaCountArgs<ExtArgs>
            result: $Utils.Optional<VacinaCountAggregateOutputType> | number
          }
        }
      }
      VacinacaoUsuario: {
        payload: Prisma.$VacinacaoUsuarioPayload<ExtArgs>
        fields: Prisma.VacinacaoUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VacinacaoUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VacinacaoUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoUsuarioPayload>
          }
          findFirst: {
            args: Prisma.VacinacaoUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VacinacaoUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoUsuarioPayload>
          }
          findMany: {
            args: Prisma.VacinacaoUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoUsuarioPayload>[]
          }
          create: {
            args: Prisma.VacinacaoUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoUsuarioPayload>
          }
          createMany: {
            args: Prisma.VacinacaoUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VacinacaoUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoUsuarioPayload>[]
          }
          delete: {
            args: Prisma.VacinacaoUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoUsuarioPayload>
          }
          update: {
            args: Prisma.VacinacaoUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.VacinacaoUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VacinacaoUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VacinacaoUsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoUsuarioPayload>[]
          }
          upsert: {
            args: Prisma.VacinacaoUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VacinacaoUsuarioPayload>
          }
          aggregate: {
            args: Prisma.VacinacaoUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVacinacaoUsuario>
          }
          groupBy: {
            args: Prisma.VacinacaoUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<VacinacaoUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.VacinacaoUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<VacinacaoUsuarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    vacinacaoBairro?: VacinacaoBairroOmit
    usuario?: UsuarioOmit
    vacina?: VacinaOmit
    vacinacaoUsuario?: VacinacaoUsuarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    vacinacoesRecebidas: number
    vacinacoesRegistradas: number
    vacinasCriadas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vacinacoesRecebidas?: boolean | UsuarioCountOutputTypeCountVacinacoesRecebidasArgs
    vacinacoesRegistradas?: boolean | UsuarioCountOutputTypeCountVacinacoesRegistradasArgs
    vacinasCriadas?: boolean | UsuarioCountOutputTypeCountVacinasCriadasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountVacinacoesRecebidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacinacaoUsuarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountVacinacoesRegistradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacinacaoUsuarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountVacinasCriadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacinaWhereInput
  }


  /**
   * Count Type VacinaCountOutputType
   */

  export type VacinaCountOutputType = {
    registros: number
  }

  export type VacinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registros?: boolean | VacinaCountOutputTypeCountRegistrosArgs
  }

  // Custom InputTypes
  /**
   * VacinaCountOutputType without action
   */
  export type VacinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinaCountOutputType
     */
    select?: VacinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VacinaCountOutputType without action
   */
  export type VacinaCountOutputTypeCountRegistrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacinacaoUsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model VacinacaoBairro
   */

  export type AggregateVacinacaoBairro = {
    _count: VacinacaoBairroCountAggregateOutputType | null
    _avg: VacinacaoBairroAvgAggregateOutputType | null
    _sum: VacinacaoBairroSumAggregateOutputType | null
    _min: VacinacaoBairroMinAggregateOutputType | null
    _max: VacinacaoBairroMaxAggregateOutputType | null
  }

  export type VacinacaoBairroAvgAggregateOutputType = {
    id: number | null
    amountVaccines: number | null
  }

  export type VacinacaoBairroSumAggregateOutputType = {
    id: number | null
    amountVaccines: number | null
  }

  export type VacinacaoBairroMinAggregateOutputType = {
    id: number | null
    nome: $Enums.BairrosRecife | null
    amountVaccines: number | null
  }

  export type VacinacaoBairroMaxAggregateOutputType = {
    id: number | null
    nome: $Enums.BairrosRecife | null
    amountVaccines: number | null
  }

  export type VacinacaoBairroCountAggregateOutputType = {
    id: number
    nome: number
    amountVaccines: number
    _all: number
  }


  export type VacinacaoBairroAvgAggregateInputType = {
    id?: true
    amountVaccines?: true
  }

  export type VacinacaoBairroSumAggregateInputType = {
    id?: true
    amountVaccines?: true
  }

  export type VacinacaoBairroMinAggregateInputType = {
    id?: true
    nome?: true
    amountVaccines?: true
  }

  export type VacinacaoBairroMaxAggregateInputType = {
    id?: true
    nome?: true
    amountVaccines?: true
  }

  export type VacinacaoBairroCountAggregateInputType = {
    id?: true
    nome?: true
    amountVaccines?: true
    _all?: true
  }

  export type VacinacaoBairroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VacinacaoBairro to aggregate.
     */
    where?: VacinacaoBairroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VacinacaoBairros to fetch.
     */
    orderBy?: VacinacaoBairroOrderByWithRelationInput | VacinacaoBairroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VacinacaoBairroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VacinacaoBairros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VacinacaoBairros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VacinacaoBairros
    **/
    _count?: true | VacinacaoBairroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VacinacaoBairroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VacinacaoBairroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VacinacaoBairroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VacinacaoBairroMaxAggregateInputType
  }

  export type GetVacinacaoBairroAggregateType<T extends VacinacaoBairroAggregateArgs> = {
        [P in keyof T & keyof AggregateVacinacaoBairro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVacinacaoBairro[P]>
      : GetScalarType<T[P], AggregateVacinacaoBairro[P]>
  }




  export type VacinacaoBairroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacinacaoBairroWhereInput
    orderBy?: VacinacaoBairroOrderByWithAggregationInput | VacinacaoBairroOrderByWithAggregationInput[]
    by: VacinacaoBairroScalarFieldEnum[] | VacinacaoBairroScalarFieldEnum
    having?: VacinacaoBairroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VacinacaoBairroCountAggregateInputType | true
    _avg?: VacinacaoBairroAvgAggregateInputType
    _sum?: VacinacaoBairroSumAggregateInputType
    _min?: VacinacaoBairroMinAggregateInputType
    _max?: VacinacaoBairroMaxAggregateInputType
  }

  export type VacinacaoBairroGroupByOutputType = {
    id: number
    nome: $Enums.BairrosRecife
    amountVaccines: number
    _count: VacinacaoBairroCountAggregateOutputType | null
    _avg: VacinacaoBairroAvgAggregateOutputType | null
    _sum: VacinacaoBairroSumAggregateOutputType | null
    _min: VacinacaoBairroMinAggregateOutputType | null
    _max: VacinacaoBairroMaxAggregateOutputType | null
  }

  type GetVacinacaoBairroGroupByPayload<T extends VacinacaoBairroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VacinacaoBairroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VacinacaoBairroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VacinacaoBairroGroupByOutputType[P]>
            : GetScalarType<T[P], VacinacaoBairroGroupByOutputType[P]>
        }
      >
    >


  export type VacinacaoBairroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    amountVaccines?: boolean
  }, ExtArgs["result"]["vacinacaoBairro"]>

  export type VacinacaoBairroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    amountVaccines?: boolean
  }, ExtArgs["result"]["vacinacaoBairro"]>

  export type VacinacaoBairroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    amountVaccines?: boolean
  }, ExtArgs["result"]["vacinacaoBairro"]>

  export type VacinacaoBairroSelectScalar = {
    id?: boolean
    nome?: boolean
    amountVaccines?: boolean
  }

  export type VacinacaoBairroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "amountVaccines", ExtArgs["result"]["vacinacaoBairro"]>

  export type $VacinacaoBairroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VacinacaoBairro"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: $Enums.BairrosRecife
      amountVaccines: number
    }, ExtArgs["result"]["vacinacaoBairro"]>
    composites: {}
  }

  type VacinacaoBairroGetPayload<S extends boolean | null | undefined | VacinacaoBairroDefaultArgs> = $Result.GetResult<Prisma.$VacinacaoBairroPayload, S>

  type VacinacaoBairroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VacinacaoBairroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VacinacaoBairroCountAggregateInputType | true
    }

  export interface VacinacaoBairroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VacinacaoBairro'], meta: { name: 'VacinacaoBairro' } }
    /**
     * Find zero or one VacinacaoBairro that matches the filter.
     * @param {VacinacaoBairroFindUniqueArgs} args - Arguments to find a VacinacaoBairro
     * @example
     * // Get one VacinacaoBairro
     * const vacinacaoBairro = await prisma.vacinacaoBairro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VacinacaoBairroFindUniqueArgs>(args: SelectSubset<T, VacinacaoBairroFindUniqueArgs<ExtArgs>>): Prisma__VacinacaoBairroClient<$Result.GetResult<Prisma.$VacinacaoBairroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VacinacaoBairro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VacinacaoBairroFindUniqueOrThrowArgs} args - Arguments to find a VacinacaoBairro
     * @example
     * // Get one VacinacaoBairro
     * const vacinacaoBairro = await prisma.vacinacaoBairro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VacinacaoBairroFindUniqueOrThrowArgs>(args: SelectSubset<T, VacinacaoBairroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VacinacaoBairroClient<$Result.GetResult<Prisma.$VacinacaoBairroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VacinacaoBairro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoBairroFindFirstArgs} args - Arguments to find a VacinacaoBairro
     * @example
     * // Get one VacinacaoBairro
     * const vacinacaoBairro = await prisma.vacinacaoBairro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VacinacaoBairroFindFirstArgs>(args?: SelectSubset<T, VacinacaoBairroFindFirstArgs<ExtArgs>>): Prisma__VacinacaoBairroClient<$Result.GetResult<Prisma.$VacinacaoBairroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VacinacaoBairro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoBairroFindFirstOrThrowArgs} args - Arguments to find a VacinacaoBairro
     * @example
     * // Get one VacinacaoBairro
     * const vacinacaoBairro = await prisma.vacinacaoBairro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VacinacaoBairroFindFirstOrThrowArgs>(args?: SelectSubset<T, VacinacaoBairroFindFirstOrThrowArgs<ExtArgs>>): Prisma__VacinacaoBairroClient<$Result.GetResult<Prisma.$VacinacaoBairroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VacinacaoBairros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoBairroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VacinacaoBairros
     * const vacinacaoBairros = await prisma.vacinacaoBairro.findMany()
     * 
     * // Get first 10 VacinacaoBairros
     * const vacinacaoBairros = await prisma.vacinacaoBairro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vacinacaoBairroWithIdOnly = await prisma.vacinacaoBairro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VacinacaoBairroFindManyArgs>(args?: SelectSubset<T, VacinacaoBairroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacinacaoBairroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VacinacaoBairro.
     * @param {VacinacaoBairroCreateArgs} args - Arguments to create a VacinacaoBairro.
     * @example
     * // Create one VacinacaoBairro
     * const VacinacaoBairro = await prisma.vacinacaoBairro.create({
     *   data: {
     *     // ... data to create a VacinacaoBairro
     *   }
     * })
     * 
     */
    create<T extends VacinacaoBairroCreateArgs>(args: SelectSubset<T, VacinacaoBairroCreateArgs<ExtArgs>>): Prisma__VacinacaoBairroClient<$Result.GetResult<Prisma.$VacinacaoBairroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VacinacaoBairros.
     * @param {VacinacaoBairroCreateManyArgs} args - Arguments to create many VacinacaoBairros.
     * @example
     * // Create many VacinacaoBairros
     * const vacinacaoBairro = await prisma.vacinacaoBairro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VacinacaoBairroCreateManyArgs>(args?: SelectSubset<T, VacinacaoBairroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VacinacaoBairros and returns the data saved in the database.
     * @param {VacinacaoBairroCreateManyAndReturnArgs} args - Arguments to create many VacinacaoBairros.
     * @example
     * // Create many VacinacaoBairros
     * const vacinacaoBairro = await prisma.vacinacaoBairro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VacinacaoBairros and only return the `id`
     * const vacinacaoBairroWithIdOnly = await prisma.vacinacaoBairro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VacinacaoBairroCreateManyAndReturnArgs>(args?: SelectSubset<T, VacinacaoBairroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacinacaoBairroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VacinacaoBairro.
     * @param {VacinacaoBairroDeleteArgs} args - Arguments to delete one VacinacaoBairro.
     * @example
     * // Delete one VacinacaoBairro
     * const VacinacaoBairro = await prisma.vacinacaoBairro.delete({
     *   where: {
     *     // ... filter to delete one VacinacaoBairro
     *   }
     * })
     * 
     */
    delete<T extends VacinacaoBairroDeleteArgs>(args: SelectSubset<T, VacinacaoBairroDeleteArgs<ExtArgs>>): Prisma__VacinacaoBairroClient<$Result.GetResult<Prisma.$VacinacaoBairroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VacinacaoBairro.
     * @param {VacinacaoBairroUpdateArgs} args - Arguments to update one VacinacaoBairro.
     * @example
     * // Update one VacinacaoBairro
     * const vacinacaoBairro = await prisma.vacinacaoBairro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VacinacaoBairroUpdateArgs>(args: SelectSubset<T, VacinacaoBairroUpdateArgs<ExtArgs>>): Prisma__VacinacaoBairroClient<$Result.GetResult<Prisma.$VacinacaoBairroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VacinacaoBairros.
     * @param {VacinacaoBairroDeleteManyArgs} args - Arguments to filter VacinacaoBairros to delete.
     * @example
     * // Delete a few VacinacaoBairros
     * const { count } = await prisma.vacinacaoBairro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VacinacaoBairroDeleteManyArgs>(args?: SelectSubset<T, VacinacaoBairroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VacinacaoBairros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoBairroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VacinacaoBairros
     * const vacinacaoBairro = await prisma.vacinacaoBairro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VacinacaoBairroUpdateManyArgs>(args: SelectSubset<T, VacinacaoBairroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VacinacaoBairros and returns the data updated in the database.
     * @param {VacinacaoBairroUpdateManyAndReturnArgs} args - Arguments to update many VacinacaoBairros.
     * @example
     * // Update many VacinacaoBairros
     * const vacinacaoBairro = await prisma.vacinacaoBairro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VacinacaoBairros and only return the `id`
     * const vacinacaoBairroWithIdOnly = await prisma.vacinacaoBairro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VacinacaoBairroUpdateManyAndReturnArgs>(args: SelectSubset<T, VacinacaoBairroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacinacaoBairroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VacinacaoBairro.
     * @param {VacinacaoBairroUpsertArgs} args - Arguments to update or create a VacinacaoBairro.
     * @example
     * // Update or create a VacinacaoBairro
     * const vacinacaoBairro = await prisma.vacinacaoBairro.upsert({
     *   create: {
     *     // ... data to create a VacinacaoBairro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VacinacaoBairro we want to update
     *   }
     * })
     */
    upsert<T extends VacinacaoBairroUpsertArgs>(args: SelectSubset<T, VacinacaoBairroUpsertArgs<ExtArgs>>): Prisma__VacinacaoBairroClient<$Result.GetResult<Prisma.$VacinacaoBairroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VacinacaoBairros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoBairroCountArgs} args - Arguments to filter VacinacaoBairros to count.
     * @example
     * // Count the number of VacinacaoBairros
     * const count = await prisma.vacinacaoBairro.count({
     *   where: {
     *     // ... the filter for the VacinacaoBairros we want to count
     *   }
     * })
    **/
    count<T extends VacinacaoBairroCountArgs>(
      args?: Subset<T, VacinacaoBairroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VacinacaoBairroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VacinacaoBairro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoBairroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VacinacaoBairroAggregateArgs>(args: Subset<T, VacinacaoBairroAggregateArgs>): Prisma.PrismaPromise<GetVacinacaoBairroAggregateType<T>>

    /**
     * Group by VacinacaoBairro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoBairroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VacinacaoBairroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VacinacaoBairroGroupByArgs['orderBy'] }
        : { orderBy?: VacinacaoBairroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VacinacaoBairroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVacinacaoBairroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VacinacaoBairro model
   */
  readonly fields: VacinacaoBairroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VacinacaoBairro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VacinacaoBairroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VacinacaoBairro model
   */
  interface VacinacaoBairroFieldRefs {
    readonly id: FieldRef<"VacinacaoBairro", 'Int'>
    readonly nome: FieldRef<"VacinacaoBairro", 'BairrosRecife'>
    readonly amountVaccines: FieldRef<"VacinacaoBairro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VacinacaoBairro findUnique
   */
  export type VacinacaoBairroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoBairro
     */
    select?: VacinacaoBairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoBairro
     */
    omit?: VacinacaoBairroOmit<ExtArgs> | null
    /**
     * Filter, which VacinacaoBairro to fetch.
     */
    where: VacinacaoBairroWhereUniqueInput
  }

  /**
   * VacinacaoBairro findUniqueOrThrow
   */
  export type VacinacaoBairroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoBairro
     */
    select?: VacinacaoBairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoBairro
     */
    omit?: VacinacaoBairroOmit<ExtArgs> | null
    /**
     * Filter, which VacinacaoBairro to fetch.
     */
    where: VacinacaoBairroWhereUniqueInput
  }

  /**
   * VacinacaoBairro findFirst
   */
  export type VacinacaoBairroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoBairro
     */
    select?: VacinacaoBairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoBairro
     */
    omit?: VacinacaoBairroOmit<ExtArgs> | null
    /**
     * Filter, which VacinacaoBairro to fetch.
     */
    where?: VacinacaoBairroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VacinacaoBairros to fetch.
     */
    orderBy?: VacinacaoBairroOrderByWithRelationInput | VacinacaoBairroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VacinacaoBairros.
     */
    cursor?: VacinacaoBairroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VacinacaoBairros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VacinacaoBairros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VacinacaoBairros.
     */
    distinct?: VacinacaoBairroScalarFieldEnum | VacinacaoBairroScalarFieldEnum[]
  }

  /**
   * VacinacaoBairro findFirstOrThrow
   */
  export type VacinacaoBairroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoBairro
     */
    select?: VacinacaoBairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoBairro
     */
    omit?: VacinacaoBairroOmit<ExtArgs> | null
    /**
     * Filter, which VacinacaoBairro to fetch.
     */
    where?: VacinacaoBairroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VacinacaoBairros to fetch.
     */
    orderBy?: VacinacaoBairroOrderByWithRelationInput | VacinacaoBairroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VacinacaoBairros.
     */
    cursor?: VacinacaoBairroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VacinacaoBairros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VacinacaoBairros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VacinacaoBairros.
     */
    distinct?: VacinacaoBairroScalarFieldEnum | VacinacaoBairroScalarFieldEnum[]
  }

  /**
   * VacinacaoBairro findMany
   */
  export type VacinacaoBairroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoBairro
     */
    select?: VacinacaoBairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoBairro
     */
    omit?: VacinacaoBairroOmit<ExtArgs> | null
    /**
     * Filter, which VacinacaoBairros to fetch.
     */
    where?: VacinacaoBairroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VacinacaoBairros to fetch.
     */
    orderBy?: VacinacaoBairroOrderByWithRelationInput | VacinacaoBairroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VacinacaoBairros.
     */
    cursor?: VacinacaoBairroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VacinacaoBairros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VacinacaoBairros.
     */
    skip?: number
    distinct?: VacinacaoBairroScalarFieldEnum | VacinacaoBairroScalarFieldEnum[]
  }

  /**
   * VacinacaoBairro create
   */
  export type VacinacaoBairroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoBairro
     */
    select?: VacinacaoBairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoBairro
     */
    omit?: VacinacaoBairroOmit<ExtArgs> | null
    /**
     * The data needed to create a VacinacaoBairro.
     */
    data: XOR<VacinacaoBairroCreateInput, VacinacaoBairroUncheckedCreateInput>
  }

  /**
   * VacinacaoBairro createMany
   */
  export type VacinacaoBairroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VacinacaoBairros.
     */
    data: VacinacaoBairroCreateManyInput | VacinacaoBairroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VacinacaoBairro createManyAndReturn
   */
  export type VacinacaoBairroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoBairro
     */
    select?: VacinacaoBairroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoBairro
     */
    omit?: VacinacaoBairroOmit<ExtArgs> | null
    /**
     * The data used to create many VacinacaoBairros.
     */
    data: VacinacaoBairroCreateManyInput | VacinacaoBairroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VacinacaoBairro update
   */
  export type VacinacaoBairroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoBairro
     */
    select?: VacinacaoBairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoBairro
     */
    omit?: VacinacaoBairroOmit<ExtArgs> | null
    /**
     * The data needed to update a VacinacaoBairro.
     */
    data: XOR<VacinacaoBairroUpdateInput, VacinacaoBairroUncheckedUpdateInput>
    /**
     * Choose, which VacinacaoBairro to update.
     */
    where: VacinacaoBairroWhereUniqueInput
  }

  /**
   * VacinacaoBairro updateMany
   */
  export type VacinacaoBairroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VacinacaoBairros.
     */
    data: XOR<VacinacaoBairroUpdateManyMutationInput, VacinacaoBairroUncheckedUpdateManyInput>
    /**
     * Filter which VacinacaoBairros to update
     */
    where?: VacinacaoBairroWhereInput
    /**
     * Limit how many VacinacaoBairros to update.
     */
    limit?: number
  }

  /**
   * VacinacaoBairro updateManyAndReturn
   */
  export type VacinacaoBairroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoBairro
     */
    select?: VacinacaoBairroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoBairro
     */
    omit?: VacinacaoBairroOmit<ExtArgs> | null
    /**
     * The data used to update VacinacaoBairros.
     */
    data: XOR<VacinacaoBairroUpdateManyMutationInput, VacinacaoBairroUncheckedUpdateManyInput>
    /**
     * Filter which VacinacaoBairros to update
     */
    where?: VacinacaoBairroWhereInput
    /**
     * Limit how many VacinacaoBairros to update.
     */
    limit?: number
  }

  /**
   * VacinacaoBairro upsert
   */
  export type VacinacaoBairroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoBairro
     */
    select?: VacinacaoBairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoBairro
     */
    omit?: VacinacaoBairroOmit<ExtArgs> | null
    /**
     * The filter to search for the VacinacaoBairro to update in case it exists.
     */
    where: VacinacaoBairroWhereUniqueInput
    /**
     * In case the VacinacaoBairro found by the `where` argument doesn't exist, create a new VacinacaoBairro with this data.
     */
    create: XOR<VacinacaoBairroCreateInput, VacinacaoBairroUncheckedCreateInput>
    /**
     * In case the VacinacaoBairro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VacinacaoBairroUpdateInput, VacinacaoBairroUncheckedUpdateInput>
  }

  /**
   * VacinacaoBairro delete
   */
  export type VacinacaoBairroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoBairro
     */
    select?: VacinacaoBairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoBairro
     */
    omit?: VacinacaoBairroOmit<ExtArgs> | null
    /**
     * Filter which VacinacaoBairro to delete.
     */
    where: VacinacaoBairroWhereUniqueInput
  }

  /**
   * VacinacaoBairro deleteMany
   */
  export type VacinacaoBairroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VacinacaoBairros to delete
     */
    where?: VacinacaoBairroWhereInput
    /**
     * Limit how many VacinacaoBairros to delete.
     */
    limit?: number
  }

  /**
   * VacinacaoBairro without action
   */
  export type VacinacaoBairroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoBairro
     */
    select?: VacinacaoBairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoBairro
     */
    omit?: VacinacaoBairroOmit<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    saldoCapibas: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    saldoCapibas: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    cpf: string | null
    nome: string | null
    email: string | null
    bairro: $Enums.BairrosRecife | null
    role: string | null
    conecta_recife_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    latestConectaToken: string | null
    saldoCapibas: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    cpf: string | null
    nome: string | null
    email: string | null
    bairro: $Enums.BairrosRecife | null
    role: string | null
    conecta_recife_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    latestConectaToken: string | null
    saldoCapibas: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    cpf: number
    nome: number
    email: number
    bairro: number
    role: number
    conecta_recife_id: number
    createdAt: number
    updatedAt: number
    latestConectaToken: number
    saldoCapibas: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    saldoCapibas?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    saldoCapibas?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    cpf?: true
    nome?: true
    email?: true
    bairro?: true
    role?: true
    conecta_recife_id?: true
    createdAt?: true
    updatedAt?: true
    latestConectaToken?: true
    saldoCapibas?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    cpf?: true
    nome?: true
    email?: true
    bairro?: true
    role?: true
    conecta_recife_id?: true
    createdAt?: true
    updatedAt?: true
    latestConectaToken?: true
    saldoCapibas?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    cpf?: true
    nome?: true
    email?: true
    bairro?: true
    role?: true
    conecta_recife_id?: true
    createdAt?: true
    updatedAt?: true
    latestConectaToken?: true
    saldoCapibas?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    cpf: string | null
    nome: string | null
    email: string | null
    bairro: $Enums.BairrosRecife | null
    role: string
    conecta_recife_id: string | null
    createdAt: Date
    updatedAt: Date
    latestConectaToken: string | null
    saldoCapibas: number
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    nome?: boolean
    email?: boolean
    bairro?: boolean
    role?: boolean
    conecta_recife_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    latestConectaToken?: boolean
    saldoCapibas?: boolean
    vacinacoesRecebidas?: boolean | Usuario$vacinacoesRecebidasArgs<ExtArgs>
    vacinacoesRegistradas?: boolean | Usuario$vacinacoesRegistradasArgs<ExtArgs>
    vacinasCriadas?: boolean | Usuario$vacinasCriadasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    nome?: boolean
    email?: boolean
    bairro?: boolean
    role?: boolean
    conecta_recife_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    latestConectaToken?: boolean
    saldoCapibas?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    nome?: boolean
    email?: boolean
    bairro?: boolean
    role?: boolean
    conecta_recife_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    latestConectaToken?: boolean
    saldoCapibas?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    cpf?: boolean
    nome?: boolean
    email?: boolean
    bairro?: boolean
    role?: boolean
    conecta_recife_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    latestConectaToken?: boolean
    saldoCapibas?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cpf" | "nome" | "email" | "bairro" | "role" | "conecta_recife_id" | "createdAt" | "updatedAt" | "latestConectaToken" | "saldoCapibas", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vacinacoesRecebidas?: boolean | Usuario$vacinacoesRecebidasArgs<ExtArgs>
    vacinacoesRegistradas?: boolean | Usuario$vacinacoesRegistradasArgs<ExtArgs>
    vacinasCriadas?: boolean | Usuario$vacinasCriadasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      vacinacoesRecebidas: Prisma.$VacinacaoUsuarioPayload<ExtArgs>[]
      vacinacoesRegistradas: Prisma.$VacinacaoUsuarioPayload<ExtArgs>[]
      vacinasCriadas: Prisma.$VacinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cpf: string | null
      nome: string | null
      email: string | null
      bairro: $Enums.BairrosRecife | null
      role: string
      conecta_recife_id: string | null
      createdAt: Date
      updatedAt: Date
      latestConectaToken: string | null
      saldoCapibas: number
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vacinacoesRecebidas<T extends Usuario$vacinacoesRecebidasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$vacinacoesRecebidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vacinacoesRegistradas<T extends Usuario$vacinacoesRegistradasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$vacinacoesRegistradasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vacinasCriadas<T extends Usuario$vacinasCriadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$vacinasCriadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly cpf: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly bairro: FieldRef<"Usuario", 'BairrosRecife'>
    readonly role: FieldRef<"Usuario", 'String'>
    readonly conecta_recife_id: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
    readonly latestConectaToken: FieldRef<"Usuario", 'String'>
    readonly saldoCapibas: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.vacinacoesRecebidas
   */
  export type Usuario$vacinacoesRecebidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioInclude<ExtArgs> | null
    where?: VacinacaoUsuarioWhereInput
    orderBy?: VacinacaoUsuarioOrderByWithRelationInput | VacinacaoUsuarioOrderByWithRelationInput[]
    cursor?: VacinacaoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VacinacaoUsuarioScalarFieldEnum | VacinacaoUsuarioScalarFieldEnum[]
  }

  /**
   * Usuario.vacinacoesRegistradas
   */
  export type Usuario$vacinacoesRegistradasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioInclude<ExtArgs> | null
    where?: VacinacaoUsuarioWhereInput
    orderBy?: VacinacaoUsuarioOrderByWithRelationInput | VacinacaoUsuarioOrderByWithRelationInput[]
    cursor?: VacinacaoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VacinacaoUsuarioScalarFieldEnum | VacinacaoUsuarioScalarFieldEnum[]
  }

  /**
   * Usuario.vacinasCriadas
   */
  export type Usuario$vacinasCriadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacina
     */
    select?: VacinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacina
     */
    omit?: VacinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinaInclude<ExtArgs> | null
    where?: VacinaWhereInput
    orderBy?: VacinaOrderByWithRelationInput | VacinaOrderByWithRelationInput[]
    cursor?: VacinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VacinaScalarFieldEnum | VacinaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Vacina
   */

  export type AggregateVacina = {
    _count: VacinaCountAggregateOutputType | null
    _avg: VacinaAvgAggregateOutputType | null
    _sum: VacinaSumAggregateOutputType | null
    _min: VacinaMinAggregateOutputType | null
    _max: VacinaMaxAggregateOutputType | null
  }

  export type VacinaAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type VacinaSumAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type VacinaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ativo: boolean | null
    adminId: number | null
  }

  export type VacinaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ativo: boolean | null
    adminId: number | null
  }

  export type VacinaCountAggregateOutputType = {
    id: number
    nome: number
    createdAt: number
    updatedAt: number
    ativo: number
    adminId: number
    _all: number
  }


  export type VacinaAvgAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type VacinaSumAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type VacinaMinAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    ativo?: true
    adminId?: true
  }

  export type VacinaMaxAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    ativo?: true
    adminId?: true
  }

  export type VacinaCountAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    ativo?: true
    adminId?: true
    _all?: true
  }

  export type VacinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vacina to aggregate.
     */
    where?: VacinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacinas to fetch.
     */
    orderBy?: VacinaOrderByWithRelationInput | VacinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VacinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vacinas
    **/
    _count?: true | VacinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VacinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VacinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VacinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VacinaMaxAggregateInputType
  }

  export type GetVacinaAggregateType<T extends VacinaAggregateArgs> = {
        [P in keyof T & keyof AggregateVacina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVacina[P]>
      : GetScalarType<T[P], AggregateVacina[P]>
  }




  export type VacinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacinaWhereInput
    orderBy?: VacinaOrderByWithAggregationInput | VacinaOrderByWithAggregationInput[]
    by: VacinaScalarFieldEnum[] | VacinaScalarFieldEnum
    having?: VacinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VacinaCountAggregateInputType | true
    _avg?: VacinaAvgAggregateInputType
    _sum?: VacinaSumAggregateInputType
    _min?: VacinaMinAggregateInputType
    _max?: VacinaMaxAggregateInputType
  }

  export type VacinaGroupByOutputType = {
    id: number
    nome: string
    createdAt: Date
    updatedAt: Date
    ativo: boolean
    adminId: number
    _count: VacinaCountAggregateOutputType | null
    _avg: VacinaAvgAggregateOutputType | null
    _sum: VacinaSumAggregateOutputType | null
    _min: VacinaMinAggregateOutputType | null
    _max: VacinaMaxAggregateOutputType | null
  }

  type GetVacinaGroupByPayload<T extends VacinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VacinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VacinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VacinaGroupByOutputType[P]>
            : GetScalarType<T[P], VacinaGroupByOutputType[P]>
        }
      >
    >


  export type VacinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ativo?: boolean
    adminId?: boolean
    adminCriador?: boolean | UsuarioDefaultArgs<ExtArgs>
    registros?: boolean | Vacina$registrosArgs<ExtArgs>
    _count?: boolean | VacinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacina"]>

  export type VacinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ativo?: boolean
    adminId?: boolean
    adminCriador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacina"]>

  export type VacinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ativo?: boolean
    adminId?: boolean
    adminCriador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacina"]>

  export type VacinaSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ativo?: boolean
    adminId?: boolean
  }

  export type VacinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt" | "updatedAt" | "ativo" | "adminId", ExtArgs["result"]["vacina"]>
  export type VacinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminCriador?: boolean | UsuarioDefaultArgs<ExtArgs>
    registros?: boolean | Vacina$registrosArgs<ExtArgs>
    _count?: boolean | VacinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VacinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminCriador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type VacinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adminCriador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $VacinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vacina"
    objects: {
      adminCriador: Prisma.$UsuarioPayload<ExtArgs>
      registros: Prisma.$VacinacaoUsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      createdAt: Date
      updatedAt: Date
      ativo: boolean
      adminId: number
    }, ExtArgs["result"]["vacina"]>
    composites: {}
  }

  type VacinaGetPayload<S extends boolean | null | undefined | VacinaDefaultArgs> = $Result.GetResult<Prisma.$VacinaPayload, S>

  type VacinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VacinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VacinaCountAggregateInputType | true
    }

  export interface VacinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vacina'], meta: { name: 'Vacina' } }
    /**
     * Find zero or one Vacina that matches the filter.
     * @param {VacinaFindUniqueArgs} args - Arguments to find a Vacina
     * @example
     * // Get one Vacina
     * const vacina = await prisma.vacina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VacinaFindUniqueArgs>(args: SelectSubset<T, VacinaFindUniqueArgs<ExtArgs>>): Prisma__VacinaClient<$Result.GetResult<Prisma.$VacinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vacina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VacinaFindUniqueOrThrowArgs} args - Arguments to find a Vacina
     * @example
     * // Get one Vacina
     * const vacina = await prisma.vacina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VacinaFindUniqueOrThrowArgs>(args: SelectSubset<T, VacinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VacinaClient<$Result.GetResult<Prisma.$VacinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vacina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinaFindFirstArgs} args - Arguments to find a Vacina
     * @example
     * // Get one Vacina
     * const vacina = await prisma.vacina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VacinaFindFirstArgs>(args?: SelectSubset<T, VacinaFindFirstArgs<ExtArgs>>): Prisma__VacinaClient<$Result.GetResult<Prisma.$VacinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vacina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinaFindFirstOrThrowArgs} args - Arguments to find a Vacina
     * @example
     * // Get one Vacina
     * const vacina = await prisma.vacina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VacinaFindFirstOrThrowArgs>(args?: SelectSubset<T, VacinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VacinaClient<$Result.GetResult<Prisma.$VacinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vacinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vacinas
     * const vacinas = await prisma.vacina.findMany()
     * 
     * // Get first 10 Vacinas
     * const vacinas = await prisma.vacina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vacinaWithIdOnly = await prisma.vacina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VacinaFindManyArgs>(args?: SelectSubset<T, VacinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vacina.
     * @param {VacinaCreateArgs} args - Arguments to create a Vacina.
     * @example
     * // Create one Vacina
     * const Vacina = await prisma.vacina.create({
     *   data: {
     *     // ... data to create a Vacina
     *   }
     * })
     * 
     */
    create<T extends VacinaCreateArgs>(args: SelectSubset<T, VacinaCreateArgs<ExtArgs>>): Prisma__VacinaClient<$Result.GetResult<Prisma.$VacinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vacinas.
     * @param {VacinaCreateManyArgs} args - Arguments to create many Vacinas.
     * @example
     * // Create many Vacinas
     * const vacina = await prisma.vacina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VacinaCreateManyArgs>(args?: SelectSubset<T, VacinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vacinas and returns the data saved in the database.
     * @param {VacinaCreateManyAndReturnArgs} args - Arguments to create many Vacinas.
     * @example
     * // Create many Vacinas
     * const vacina = await prisma.vacina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vacinas and only return the `id`
     * const vacinaWithIdOnly = await prisma.vacina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VacinaCreateManyAndReturnArgs>(args?: SelectSubset<T, VacinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vacina.
     * @param {VacinaDeleteArgs} args - Arguments to delete one Vacina.
     * @example
     * // Delete one Vacina
     * const Vacina = await prisma.vacina.delete({
     *   where: {
     *     // ... filter to delete one Vacina
     *   }
     * })
     * 
     */
    delete<T extends VacinaDeleteArgs>(args: SelectSubset<T, VacinaDeleteArgs<ExtArgs>>): Prisma__VacinaClient<$Result.GetResult<Prisma.$VacinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vacina.
     * @param {VacinaUpdateArgs} args - Arguments to update one Vacina.
     * @example
     * // Update one Vacina
     * const vacina = await prisma.vacina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VacinaUpdateArgs>(args: SelectSubset<T, VacinaUpdateArgs<ExtArgs>>): Prisma__VacinaClient<$Result.GetResult<Prisma.$VacinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vacinas.
     * @param {VacinaDeleteManyArgs} args - Arguments to filter Vacinas to delete.
     * @example
     * // Delete a few Vacinas
     * const { count } = await prisma.vacina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VacinaDeleteManyArgs>(args?: SelectSubset<T, VacinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vacinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vacinas
     * const vacina = await prisma.vacina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VacinaUpdateManyArgs>(args: SelectSubset<T, VacinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vacinas and returns the data updated in the database.
     * @param {VacinaUpdateManyAndReturnArgs} args - Arguments to update many Vacinas.
     * @example
     * // Update many Vacinas
     * const vacina = await prisma.vacina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vacinas and only return the `id`
     * const vacinaWithIdOnly = await prisma.vacina.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VacinaUpdateManyAndReturnArgs>(args: SelectSubset<T, VacinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vacina.
     * @param {VacinaUpsertArgs} args - Arguments to update or create a Vacina.
     * @example
     * // Update or create a Vacina
     * const vacina = await prisma.vacina.upsert({
     *   create: {
     *     // ... data to create a Vacina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vacina we want to update
     *   }
     * })
     */
    upsert<T extends VacinaUpsertArgs>(args: SelectSubset<T, VacinaUpsertArgs<ExtArgs>>): Prisma__VacinaClient<$Result.GetResult<Prisma.$VacinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vacinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinaCountArgs} args - Arguments to filter Vacinas to count.
     * @example
     * // Count the number of Vacinas
     * const count = await prisma.vacina.count({
     *   where: {
     *     // ... the filter for the Vacinas we want to count
     *   }
     * })
    **/
    count<T extends VacinaCountArgs>(
      args?: Subset<T, VacinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VacinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vacina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VacinaAggregateArgs>(args: Subset<T, VacinaAggregateArgs>): Prisma.PrismaPromise<GetVacinaAggregateType<T>>

    /**
     * Group by Vacina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VacinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VacinaGroupByArgs['orderBy'] }
        : { orderBy?: VacinaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VacinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVacinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vacina model
   */
  readonly fields: VacinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vacina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VacinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adminCriador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registros<T extends Vacina$registrosArgs<ExtArgs> = {}>(args?: Subset<T, Vacina$registrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vacina model
   */
  interface VacinaFieldRefs {
    readonly id: FieldRef<"Vacina", 'Int'>
    readonly nome: FieldRef<"Vacina", 'String'>
    readonly createdAt: FieldRef<"Vacina", 'DateTime'>
    readonly updatedAt: FieldRef<"Vacina", 'DateTime'>
    readonly ativo: FieldRef<"Vacina", 'Boolean'>
    readonly adminId: FieldRef<"Vacina", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vacina findUnique
   */
  export type VacinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacina
     */
    select?: VacinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacina
     */
    omit?: VacinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinaInclude<ExtArgs> | null
    /**
     * Filter, which Vacina to fetch.
     */
    where: VacinaWhereUniqueInput
  }

  /**
   * Vacina findUniqueOrThrow
   */
  export type VacinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacina
     */
    select?: VacinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacina
     */
    omit?: VacinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinaInclude<ExtArgs> | null
    /**
     * Filter, which Vacina to fetch.
     */
    where: VacinaWhereUniqueInput
  }

  /**
   * Vacina findFirst
   */
  export type VacinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacina
     */
    select?: VacinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacina
     */
    omit?: VacinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinaInclude<ExtArgs> | null
    /**
     * Filter, which Vacina to fetch.
     */
    where?: VacinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacinas to fetch.
     */
    orderBy?: VacinaOrderByWithRelationInput | VacinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vacinas.
     */
    cursor?: VacinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vacinas.
     */
    distinct?: VacinaScalarFieldEnum | VacinaScalarFieldEnum[]
  }

  /**
   * Vacina findFirstOrThrow
   */
  export type VacinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacina
     */
    select?: VacinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacina
     */
    omit?: VacinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinaInclude<ExtArgs> | null
    /**
     * Filter, which Vacina to fetch.
     */
    where?: VacinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacinas to fetch.
     */
    orderBy?: VacinaOrderByWithRelationInput | VacinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vacinas.
     */
    cursor?: VacinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vacinas.
     */
    distinct?: VacinaScalarFieldEnum | VacinaScalarFieldEnum[]
  }

  /**
   * Vacina findMany
   */
  export type VacinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacina
     */
    select?: VacinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacina
     */
    omit?: VacinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinaInclude<ExtArgs> | null
    /**
     * Filter, which Vacinas to fetch.
     */
    where?: VacinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vacinas to fetch.
     */
    orderBy?: VacinaOrderByWithRelationInput | VacinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vacinas.
     */
    cursor?: VacinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vacinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vacinas.
     */
    skip?: number
    distinct?: VacinaScalarFieldEnum | VacinaScalarFieldEnum[]
  }

  /**
   * Vacina create
   */
  export type VacinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacina
     */
    select?: VacinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacina
     */
    omit?: VacinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Vacina.
     */
    data: XOR<VacinaCreateInput, VacinaUncheckedCreateInput>
  }

  /**
   * Vacina createMany
   */
  export type VacinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vacinas.
     */
    data: VacinaCreateManyInput | VacinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vacina createManyAndReturn
   */
  export type VacinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacina
     */
    select?: VacinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vacina
     */
    omit?: VacinaOmit<ExtArgs> | null
    /**
     * The data used to create many Vacinas.
     */
    data: VacinaCreateManyInput | VacinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vacina update
   */
  export type VacinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacina
     */
    select?: VacinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacina
     */
    omit?: VacinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Vacina.
     */
    data: XOR<VacinaUpdateInput, VacinaUncheckedUpdateInput>
    /**
     * Choose, which Vacina to update.
     */
    where: VacinaWhereUniqueInput
  }

  /**
   * Vacina updateMany
   */
  export type VacinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vacinas.
     */
    data: XOR<VacinaUpdateManyMutationInput, VacinaUncheckedUpdateManyInput>
    /**
     * Filter which Vacinas to update
     */
    where?: VacinaWhereInput
    /**
     * Limit how many Vacinas to update.
     */
    limit?: number
  }

  /**
   * Vacina updateManyAndReturn
   */
  export type VacinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacina
     */
    select?: VacinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vacina
     */
    omit?: VacinaOmit<ExtArgs> | null
    /**
     * The data used to update Vacinas.
     */
    data: XOR<VacinaUpdateManyMutationInput, VacinaUncheckedUpdateManyInput>
    /**
     * Filter which Vacinas to update
     */
    where?: VacinaWhereInput
    /**
     * Limit how many Vacinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vacina upsert
   */
  export type VacinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacina
     */
    select?: VacinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacina
     */
    omit?: VacinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Vacina to update in case it exists.
     */
    where: VacinaWhereUniqueInput
    /**
     * In case the Vacina found by the `where` argument doesn't exist, create a new Vacina with this data.
     */
    create: XOR<VacinaCreateInput, VacinaUncheckedCreateInput>
    /**
     * In case the Vacina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VacinaUpdateInput, VacinaUncheckedUpdateInput>
  }

  /**
   * Vacina delete
   */
  export type VacinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacina
     */
    select?: VacinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacina
     */
    omit?: VacinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinaInclude<ExtArgs> | null
    /**
     * Filter which Vacina to delete.
     */
    where: VacinaWhereUniqueInput
  }

  /**
   * Vacina deleteMany
   */
  export type VacinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vacinas to delete
     */
    where?: VacinaWhereInput
    /**
     * Limit how many Vacinas to delete.
     */
    limit?: number
  }

  /**
   * Vacina.registros
   */
  export type Vacina$registrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioInclude<ExtArgs> | null
    where?: VacinacaoUsuarioWhereInput
    orderBy?: VacinacaoUsuarioOrderByWithRelationInput | VacinacaoUsuarioOrderByWithRelationInput[]
    cursor?: VacinacaoUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VacinacaoUsuarioScalarFieldEnum | VacinacaoUsuarioScalarFieldEnum[]
  }

  /**
   * Vacina without action
   */
  export type VacinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vacina
     */
    select?: VacinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vacina
     */
    omit?: VacinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinaInclude<ExtArgs> | null
  }


  /**
   * Model VacinacaoUsuario
   */

  export type AggregateVacinacaoUsuario = {
    _count: VacinacaoUsuarioCountAggregateOutputType | null
    _avg: VacinacaoUsuarioAvgAggregateOutputType | null
    _sum: VacinacaoUsuarioSumAggregateOutputType | null
    _min: VacinacaoUsuarioMinAggregateOutputType | null
    _max: VacinacaoUsuarioMaxAggregateOutputType | null
  }

  export type VacinacaoUsuarioAvgAggregateOutputType = {
    id: number | null
    earnedCapibas: number | null
    usuarioId: number | null
    vacinaId: number | null
    adminId: number | null
  }

  export type VacinacaoUsuarioSumAggregateOutputType = {
    id: number | null
    earnedCapibas: number | null
    usuarioId: number | null
    vacinaId: number | null
    adminId: number | null
  }

  export type VacinacaoUsuarioMinAggregateOutputType = {
    id: number | null
    dataAplicacao: Date | null
    localAplicacao: string | null
    earnedCapibas: number | null
    usuarioId: number | null
    vacinaId: number | null
    adminId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VacinacaoUsuarioMaxAggregateOutputType = {
    id: number | null
    dataAplicacao: Date | null
    localAplicacao: string | null
    earnedCapibas: number | null
    usuarioId: number | null
    vacinaId: number | null
    adminId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VacinacaoUsuarioCountAggregateOutputType = {
    id: number
    dataAplicacao: number
    localAplicacao: number
    earnedCapibas: number
    usuarioId: number
    vacinaId: number
    adminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VacinacaoUsuarioAvgAggregateInputType = {
    id?: true
    earnedCapibas?: true
    usuarioId?: true
    vacinaId?: true
    adminId?: true
  }

  export type VacinacaoUsuarioSumAggregateInputType = {
    id?: true
    earnedCapibas?: true
    usuarioId?: true
    vacinaId?: true
    adminId?: true
  }

  export type VacinacaoUsuarioMinAggregateInputType = {
    id?: true
    dataAplicacao?: true
    localAplicacao?: true
    earnedCapibas?: true
    usuarioId?: true
    vacinaId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VacinacaoUsuarioMaxAggregateInputType = {
    id?: true
    dataAplicacao?: true
    localAplicacao?: true
    earnedCapibas?: true
    usuarioId?: true
    vacinaId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VacinacaoUsuarioCountAggregateInputType = {
    id?: true
    dataAplicacao?: true
    localAplicacao?: true
    earnedCapibas?: true
    usuarioId?: true
    vacinaId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VacinacaoUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VacinacaoUsuario to aggregate.
     */
    where?: VacinacaoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VacinacaoUsuarios to fetch.
     */
    orderBy?: VacinacaoUsuarioOrderByWithRelationInput | VacinacaoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VacinacaoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VacinacaoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VacinacaoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VacinacaoUsuarios
    **/
    _count?: true | VacinacaoUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VacinacaoUsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VacinacaoUsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VacinacaoUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VacinacaoUsuarioMaxAggregateInputType
  }

  export type GetVacinacaoUsuarioAggregateType<T extends VacinacaoUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateVacinacaoUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVacinacaoUsuario[P]>
      : GetScalarType<T[P], AggregateVacinacaoUsuario[P]>
  }




  export type VacinacaoUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VacinacaoUsuarioWhereInput
    orderBy?: VacinacaoUsuarioOrderByWithAggregationInput | VacinacaoUsuarioOrderByWithAggregationInput[]
    by: VacinacaoUsuarioScalarFieldEnum[] | VacinacaoUsuarioScalarFieldEnum
    having?: VacinacaoUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VacinacaoUsuarioCountAggregateInputType | true
    _avg?: VacinacaoUsuarioAvgAggregateInputType
    _sum?: VacinacaoUsuarioSumAggregateInputType
    _min?: VacinacaoUsuarioMinAggregateInputType
    _max?: VacinacaoUsuarioMaxAggregateInputType
  }

  export type VacinacaoUsuarioGroupByOutputType = {
    id: number
    dataAplicacao: Date
    localAplicacao: string | null
    earnedCapibas: number
    usuarioId: number
    vacinaId: number
    adminId: number
    createdAt: Date
    updatedAt: Date
    _count: VacinacaoUsuarioCountAggregateOutputType | null
    _avg: VacinacaoUsuarioAvgAggregateOutputType | null
    _sum: VacinacaoUsuarioSumAggregateOutputType | null
    _min: VacinacaoUsuarioMinAggregateOutputType | null
    _max: VacinacaoUsuarioMaxAggregateOutputType | null
  }

  type GetVacinacaoUsuarioGroupByPayload<T extends VacinacaoUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VacinacaoUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VacinacaoUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VacinacaoUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], VacinacaoUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type VacinacaoUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataAplicacao?: boolean
    localAplicacao?: boolean
    earnedCapibas?: boolean
    usuarioId?: boolean
    vacinaId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vacina?: boolean | VacinaDefaultArgs<ExtArgs>
    adminRegistrador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacinacaoUsuario"]>

  export type VacinacaoUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataAplicacao?: boolean
    localAplicacao?: boolean
    earnedCapibas?: boolean
    usuarioId?: boolean
    vacinaId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vacina?: boolean | VacinaDefaultArgs<ExtArgs>
    adminRegistrador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacinacaoUsuario"]>

  export type VacinacaoUsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataAplicacao?: boolean
    localAplicacao?: boolean
    earnedCapibas?: boolean
    usuarioId?: boolean
    vacinaId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vacina?: boolean | VacinaDefaultArgs<ExtArgs>
    adminRegistrador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacinacaoUsuario"]>

  export type VacinacaoUsuarioSelectScalar = {
    id?: boolean
    dataAplicacao?: boolean
    localAplicacao?: boolean
    earnedCapibas?: boolean
    usuarioId?: boolean
    vacinaId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VacinacaoUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataAplicacao" | "localAplicacao" | "earnedCapibas" | "usuarioId" | "vacinaId" | "adminId" | "createdAt" | "updatedAt", ExtArgs["result"]["vacinacaoUsuario"]>
  export type VacinacaoUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vacina?: boolean | VacinaDefaultArgs<ExtArgs>
    adminRegistrador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type VacinacaoUsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vacina?: boolean | VacinaDefaultArgs<ExtArgs>
    adminRegistrador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type VacinacaoUsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vacina?: boolean | VacinaDefaultArgs<ExtArgs>
    adminRegistrador?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $VacinacaoUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VacinacaoUsuario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      vacina: Prisma.$VacinaPayload<ExtArgs>
      adminRegistrador: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dataAplicacao: Date
      localAplicacao: string | null
      earnedCapibas: number
      usuarioId: number
      vacinaId: number
      adminId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vacinacaoUsuario"]>
    composites: {}
  }

  type VacinacaoUsuarioGetPayload<S extends boolean | null | undefined | VacinacaoUsuarioDefaultArgs> = $Result.GetResult<Prisma.$VacinacaoUsuarioPayload, S>

  type VacinacaoUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VacinacaoUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VacinacaoUsuarioCountAggregateInputType | true
    }

  export interface VacinacaoUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VacinacaoUsuario'], meta: { name: 'VacinacaoUsuario' } }
    /**
     * Find zero or one VacinacaoUsuario that matches the filter.
     * @param {VacinacaoUsuarioFindUniqueArgs} args - Arguments to find a VacinacaoUsuario
     * @example
     * // Get one VacinacaoUsuario
     * const vacinacaoUsuario = await prisma.vacinacaoUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VacinacaoUsuarioFindUniqueArgs>(args: SelectSubset<T, VacinacaoUsuarioFindUniqueArgs<ExtArgs>>): Prisma__VacinacaoUsuarioClient<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VacinacaoUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VacinacaoUsuarioFindUniqueOrThrowArgs} args - Arguments to find a VacinacaoUsuario
     * @example
     * // Get one VacinacaoUsuario
     * const vacinacaoUsuario = await prisma.vacinacaoUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VacinacaoUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, VacinacaoUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VacinacaoUsuarioClient<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VacinacaoUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoUsuarioFindFirstArgs} args - Arguments to find a VacinacaoUsuario
     * @example
     * // Get one VacinacaoUsuario
     * const vacinacaoUsuario = await prisma.vacinacaoUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VacinacaoUsuarioFindFirstArgs>(args?: SelectSubset<T, VacinacaoUsuarioFindFirstArgs<ExtArgs>>): Prisma__VacinacaoUsuarioClient<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VacinacaoUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoUsuarioFindFirstOrThrowArgs} args - Arguments to find a VacinacaoUsuario
     * @example
     * // Get one VacinacaoUsuario
     * const vacinacaoUsuario = await prisma.vacinacaoUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VacinacaoUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, VacinacaoUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__VacinacaoUsuarioClient<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VacinacaoUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VacinacaoUsuarios
     * const vacinacaoUsuarios = await prisma.vacinacaoUsuario.findMany()
     * 
     * // Get first 10 VacinacaoUsuarios
     * const vacinacaoUsuarios = await prisma.vacinacaoUsuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vacinacaoUsuarioWithIdOnly = await prisma.vacinacaoUsuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VacinacaoUsuarioFindManyArgs>(args?: SelectSubset<T, VacinacaoUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VacinacaoUsuario.
     * @param {VacinacaoUsuarioCreateArgs} args - Arguments to create a VacinacaoUsuario.
     * @example
     * // Create one VacinacaoUsuario
     * const VacinacaoUsuario = await prisma.vacinacaoUsuario.create({
     *   data: {
     *     // ... data to create a VacinacaoUsuario
     *   }
     * })
     * 
     */
    create<T extends VacinacaoUsuarioCreateArgs>(args: SelectSubset<T, VacinacaoUsuarioCreateArgs<ExtArgs>>): Prisma__VacinacaoUsuarioClient<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VacinacaoUsuarios.
     * @param {VacinacaoUsuarioCreateManyArgs} args - Arguments to create many VacinacaoUsuarios.
     * @example
     * // Create many VacinacaoUsuarios
     * const vacinacaoUsuario = await prisma.vacinacaoUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VacinacaoUsuarioCreateManyArgs>(args?: SelectSubset<T, VacinacaoUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VacinacaoUsuarios and returns the data saved in the database.
     * @param {VacinacaoUsuarioCreateManyAndReturnArgs} args - Arguments to create many VacinacaoUsuarios.
     * @example
     * // Create many VacinacaoUsuarios
     * const vacinacaoUsuario = await prisma.vacinacaoUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VacinacaoUsuarios and only return the `id`
     * const vacinacaoUsuarioWithIdOnly = await prisma.vacinacaoUsuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VacinacaoUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, VacinacaoUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VacinacaoUsuario.
     * @param {VacinacaoUsuarioDeleteArgs} args - Arguments to delete one VacinacaoUsuario.
     * @example
     * // Delete one VacinacaoUsuario
     * const VacinacaoUsuario = await prisma.vacinacaoUsuario.delete({
     *   where: {
     *     // ... filter to delete one VacinacaoUsuario
     *   }
     * })
     * 
     */
    delete<T extends VacinacaoUsuarioDeleteArgs>(args: SelectSubset<T, VacinacaoUsuarioDeleteArgs<ExtArgs>>): Prisma__VacinacaoUsuarioClient<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VacinacaoUsuario.
     * @param {VacinacaoUsuarioUpdateArgs} args - Arguments to update one VacinacaoUsuario.
     * @example
     * // Update one VacinacaoUsuario
     * const vacinacaoUsuario = await prisma.vacinacaoUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VacinacaoUsuarioUpdateArgs>(args: SelectSubset<T, VacinacaoUsuarioUpdateArgs<ExtArgs>>): Prisma__VacinacaoUsuarioClient<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VacinacaoUsuarios.
     * @param {VacinacaoUsuarioDeleteManyArgs} args - Arguments to filter VacinacaoUsuarios to delete.
     * @example
     * // Delete a few VacinacaoUsuarios
     * const { count } = await prisma.vacinacaoUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VacinacaoUsuarioDeleteManyArgs>(args?: SelectSubset<T, VacinacaoUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VacinacaoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VacinacaoUsuarios
     * const vacinacaoUsuario = await prisma.vacinacaoUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VacinacaoUsuarioUpdateManyArgs>(args: SelectSubset<T, VacinacaoUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VacinacaoUsuarios and returns the data updated in the database.
     * @param {VacinacaoUsuarioUpdateManyAndReturnArgs} args - Arguments to update many VacinacaoUsuarios.
     * @example
     * // Update many VacinacaoUsuarios
     * const vacinacaoUsuario = await prisma.vacinacaoUsuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VacinacaoUsuarios and only return the `id`
     * const vacinacaoUsuarioWithIdOnly = await prisma.vacinacaoUsuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VacinacaoUsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, VacinacaoUsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VacinacaoUsuario.
     * @param {VacinacaoUsuarioUpsertArgs} args - Arguments to update or create a VacinacaoUsuario.
     * @example
     * // Update or create a VacinacaoUsuario
     * const vacinacaoUsuario = await prisma.vacinacaoUsuario.upsert({
     *   create: {
     *     // ... data to create a VacinacaoUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VacinacaoUsuario we want to update
     *   }
     * })
     */
    upsert<T extends VacinacaoUsuarioUpsertArgs>(args: SelectSubset<T, VacinacaoUsuarioUpsertArgs<ExtArgs>>): Prisma__VacinacaoUsuarioClient<$Result.GetResult<Prisma.$VacinacaoUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VacinacaoUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoUsuarioCountArgs} args - Arguments to filter VacinacaoUsuarios to count.
     * @example
     * // Count the number of VacinacaoUsuarios
     * const count = await prisma.vacinacaoUsuario.count({
     *   where: {
     *     // ... the filter for the VacinacaoUsuarios we want to count
     *   }
     * })
    **/
    count<T extends VacinacaoUsuarioCountArgs>(
      args?: Subset<T, VacinacaoUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VacinacaoUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VacinacaoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VacinacaoUsuarioAggregateArgs>(args: Subset<T, VacinacaoUsuarioAggregateArgs>): Prisma.PrismaPromise<GetVacinacaoUsuarioAggregateType<T>>

    /**
     * Group by VacinacaoUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacinacaoUsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VacinacaoUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VacinacaoUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: VacinacaoUsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VacinacaoUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVacinacaoUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VacinacaoUsuario model
   */
  readonly fields: VacinacaoUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VacinacaoUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VacinacaoUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vacina<T extends VacinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VacinaDefaultArgs<ExtArgs>>): Prisma__VacinaClient<$Result.GetResult<Prisma.$VacinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    adminRegistrador<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VacinacaoUsuario model
   */
  interface VacinacaoUsuarioFieldRefs {
    readonly id: FieldRef<"VacinacaoUsuario", 'Int'>
    readonly dataAplicacao: FieldRef<"VacinacaoUsuario", 'DateTime'>
    readonly localAplicacao: FieldRef<"VacinacaoUsuario", 'String'>
    readonly earnedCapibas: FieldRef<"VacinacaoUsuario", 'Int'>
    readonly usuarioId: FieldRef<"VacinacaoUsuario", 'Int'>
    readonly vacinaId: FieldRef<"VacinacaoUsuario", 'Int'>
    readonly adminId: FieldRef<"VacinacaoUsuario", 'Int'>
    readonly createdAt: FieldRef<"VacinacaoUsuario", 'DateTime'>
    readonly updatedAt: FieldRef<"VacinacaoUsuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VacinacaoUsuario findUnique
   */
  export type VacinacaoUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which VacinacaoUsuario to fetch.
     */
    where: VacinacaoUsuarioWhereUniqueInput
  }

  /**
   * VacinacaoUsuario findUniqueOrThrow
   */
  export type VacinacaoUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which VacinacaoUsuario to fetch.
     */
    where: VacinacaoUsuarioWhereUniqueInput
  }

  /**
   * VacinacaoUsuario findFirst
   */
  export type VacinacaoUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which VacinacaoUsuario to fetch.
     */
    where?: VacinacaoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VacinacaoUsuarios to fetch.
     */
    orderBy?: VacinacaoUsuarioOrderByWithRelationInput | VacinacaoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VacinacaoUsuarios.
     */
    cursor?: VacinacaoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VacinacaoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VacinacaoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VacinacaoUsuarios.
     */
    distinct?: VacinacaoUsuarioScalarFieldEnum | VacinacaoUsuarioScalarFieldEnum[]
  }

  /**
   * VacinacaoUsuario findFirstOrThrow
   */
  export type VacinacaoUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which VacinacaoUsuario to fetch.
     */
    where?: VacinacaoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VacinacaoUsuarios to fetch.
     */
    orderBy?: VacinacaoUsuarioOrderByWithRelationInput | VacinacaoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VacinacaoUsuarios.
     */
    cursor?: VacinacaoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VacinacaoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VacinacaoUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VacinacaoUsuarios.
     */
    distinct?: VacinacaoUsuarioScalarFieldEnum | VacinacaoUsuarioScalarFieldEnum[]
  }

  /**
   * VacinacaoUsuario findMany
   */
  export type VacinacaoUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which VacinacaoUsuarios to fetch.
     */
    where?: VacinacaoUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VacinacaoUsuarios to fetch.
     */
    orderBy?: VacinacaoUsuarioOrderByWithRelationInput | VacinacaoUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VacinacaoUsuarios.
     */
    cursor?: VacinacaoUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VacinacaoUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VacinacaoUsuarios.
     */
    skip?: number
    distinct?: VacinacaoUsuarioScalarFieldEnum | VacinacaoUsuarioScalarFieldEnum[]
  }

  /**
   * VacinacaoUsuario create
   */
  export type VacinacaoUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a VacinacaoUsuario.
     */
    data: XOR<VacinacaoUsuarioCreateInput, VacinacaoUsuarioUncheckedCreateInput>
  }

  /**
   * VacinacaoUsuario createMany
   */
  export type VacinacaoUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VacinacaoUsuarios.
     */
    data: VacinacaoUsuarioCreateManyInput | VacinacaoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VacinacaoUsuario createManyAndReturn
   */
  export type VacinacaoUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many VacinacaoUsuarios.
     */
    data: VacinacaoUsuarioCreateManyInput | VacinacaoUsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VacinacaoUsuario update
   */
  export type VacinacaoUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a VacinacaoUsuario.
     */
    data: XOR<VacinacaoUsuarioUpdateInput, VacinacaoUsuarioUncheckedUpdateInput>
    /**
     * Choose, which VacinacaoUsuario to update.
     */
    where: VacinacaoUsuarioWhereUniqueInput
  }

  /**
   * VacinacaoUsuario updateMany
   */
  export type VacinacaoUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VacinacaoUsuarios.
     */
    data: XOR<VacinacaoUsuarioUpdateManyMutationInput, VacinacaoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which VacinacaoUsuarios to update
     */
    where?: VacinacaoUsuarioWhereInput
    /**
     * Limit how many VacinacaoUsuarios to update.
     */
    limit?: number
  }

  /**
   * VacinacaoUsuario updateManyAndReturn
   */
  export type VacinacaoUsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * The data used to update VacinacaoUsuarios.
     */
    data: XOR<VacinacaoUsuarioUpdateManyMutationInput, VacinacaoUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which VacinacaoUsuarios to update
     */
    where?: VacinacaoUsuarioWhereInput
    /**
     * Limit how many VacinacaoUsuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VacinacaoUsuario upsert
   */
  export type VacinacaoUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the VacinacaoUsuario to update in case it exists.
     */
    where: VacinacaoUsuarioWhereUniqueInput
    /**
     * In case the VacinacaoUsuario found by the `where` argument doesn't exist, create a new VacinacaoUsuario with this data.
     */
    create: XOR<VacinacaoUsuarioCreateInput, VacinacaoUsuarioUncheckedCreateInput>
    /**
     * In case the VacinacaoUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VacinacaoUsuarioUpdateInput, VacinacaoUsuarioUncheckedUpdateInput>
  }

  /**
   * VacinacaoUsuario delete
   */
  export type VacinacaoUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioInclude<ExtArgs> | null
    /**
     * Filter which VacinacaoUsuario to delete.
     */
    where: VacinacaoUsuarioWhereUniqueInput
  }

  /**
   * VacinacaoUsuario deleteMany
   */
  export type VacinacaoUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VacinacaoUsuarios to delete
     */
    where?: VacinacaoUsuarioWhereInput
    /**
     * Limit how many VacinacaoUsuarios to delete.
     */
    limit?: number
  }

  /**
   * VacinacaoUsuario without action
   */
  export type VacinacaoUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VacinacaoUsuario
     */
    select?: VacinacaoUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VacinacaoUsuario
     */
    omit?: VacinacaoUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VacinacaoUsuarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VacinacaoBairroScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    amountVaccines: 'amountVaccines'
  };

  export type VacinacaoBairroScalarFieldEnum = (typeof VacinacaoBairroScalarFieldEnum)[keyof typeof VacinacaoBairroScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    nome: 'nome',
    email: 'email',
    bairro: 'bairro',
    role: 'role',
    conecta_recife_id: 'conecta_recife_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    latestConectaToken: 'latestConectaToken',
    saldoCapibas: 'saldoCapibas'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const VacinaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ativo: 'ativo',
    adminId: 'adminId'
  };

  export type VacinaScalarFieldEnum = (typeof VacinaScalarFieldEnum)[keyof typeof VacinaScalarFieldEnum]


  export const VacinacaoUsuarioScalarFieldEnum: {
    id: 'id',
    dataAplicacao: 'dataAplicacao',
    localAplicacao: 'localAplicacao',
    earnedCapibas: 'earnedCapibas',
    usuarioId: 'usuarioId',
    vacinaId: 'vacinaId',
    adminId: 'adminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VacinacaoUsuarioScalarFieldEnum = (typeof VacinacaoUsuarioScalarFieldEnum)[keyof typeof VacinacaoUsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BairrosRecife'
   */
  export type EnumBairrosRecifeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BairrosRecife'>
    


  /**
   * Reference to a field of type 'BairrosRecife[]'
   */
  export type ListEnumBairrosRecifeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BairrosRecife[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type VacinacaoBairroWhereInput = {
    AND?: VacinacaoBairroWhereInput | VacinacaoBairroWhereInput[]
    OR?: VacinacaoBairroWhereInput[]
    NOT?: VacinacaoBairroWhereInput | VacinacaoBairroWhereInput[]
    id?: IntFilter<"VacinacaoBairro"> | number
    nome?: EnumBairrosRecifeFilter<"VacinacaoBairro"> | $Enums.BairrosRecife
    amountVaccines?: IntFilter<"VacinacaoBairro"> | number
  }

  export type VacinacaoBairroOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    amountVaccines?: SortOrder
  }

  export type VacinacaoBairroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: $Enums.BairrosRecife
    AND?: VacinacaoBairroWhereInput | VacinacaoBairroWhereInput[]
    OR?: VacinacaoBairroWhereInput[]
    NOT?: VacinacaoBairroWhereInput | VacinacaoBairroWhereInput[]
    amountVaccines?: IntFilter<"VacinacaoBairro"> | number
  }, "id" | "nome">

  export type VacinacaoBairroOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    amountVaccines?: SortOrder
    _count?: VacinacaoBairroCountOrderByAggregateInput
    _avg?: VacinacaoBairroAvgOrderByAggregateInput
    _max?: VacinacaoBairroMaxOrderByAggregateInput
    _min?: VacinacaoBairroMinOrderByAggregateInput
    _sum?: VacinacaoBairroSumOrderByAggregateInput
  }

  export type VacinacaoBairroScalarWhereWithAggregatesInput = {
    AND?: VacinacaoBairroScalarWhereWithAggregatesInput | VacinacaoBairroScalarWhereWithAggregatesInput[]
    OR?: VacinacaoBairroScalarWhereWithAggregatesInput[]
    NOT?: VacinacaoBairroScalarWhereWithAggregatesInput | VacinacaoBairroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VacinacaoBairro"> | number
    nome?: EnumBairrosRecifeWithAggregatesFilter<"VacinacaoBairro"> | $Enums.BairrosRecife
    amountVaccines?: IntWithAggregatesFilter<"VacinacaoBairro"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    cpf?: StringNullableFilter<"Usuario"> | string | null
    nome?: StringNullableFilter<"Usuario"> | string | null
    email?: StringNullableFilter<"Usuario"> | string | null
    bairro?: EnumBairrosRecifeNullableFilter<"Usuario"> | $Enums.BairrosRecife | null
    role?: StringFilter<"Usuario"> | string
    conecta_recife_id?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    latestConectaToken?: StringNullableFilter<"Usuario"> | string | null
    saldoCapibas?: IntFilter<"Usuario"> | number
    vacinacoesRecebidas?: VacinacaoUsuarioListRelationFilter
    vacinacoesRegistradas?: VacinacaoUsuarioListRelationFilter
    vacinasCriadas?: VacinaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    role?: SortOrder
    conecta_recife_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latestConectaToken?: SortOrderInput | SortOrder
    saldoCapibas?: SortOrder
    vacinacoesRecebidas?: VacinacaoUsuarioOrderByRelationAggregateInput
    vacinacoesRegistradas?: VacinacaoUsuarioOrderByRelationAggregateInput
    vacinasCriadas?: VacinaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringNullableFilter<"Usuario"> | string | null
    bairro?: EnumBairrosRecifeNullableFilter<"Usuario"> | $Enums.BairrosRecife | null
    role?: StringFilter<"Usuario"> | string
    conecta_recife_id?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    latestConectaToken?: StringNullableFilter<"Usuario"> | string | null
    saldoCapibas?: IntFilter<"Usuario"> | number
    vacinacoesRecebidas?: VacinacaoUsuarioListRelationFilter
    vacinacoesRegistradas?: VacinacaoUsuarioListRelationFilter
    vacinasCriadas?: VacinaListRelationFilter
  }, "id" | "cpf" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    role?: SortOrder
    conecta_recife_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latestConectaToken?: SortOrderInput | SortOrder
    saldoCapibas?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    cpf?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    nome?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    email?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    bairro?: EnumBairrosRecifeNullableWithAggregatesFilter<"Usuario"> | $Enums.BairrosRecife | null
    role?: StringWithAggregatesFilter<"Usuario"> | string
    conecta_recife_id?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    latestConectaToken?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    saldoCapibas?: IntWithAggregatesFilter<"Usuario"> | number
  }

  export type VacinaWhereInput = {
    AND?: VacinaWhereInput | VacinaWhereInput[]
    OR?: VacinaWhereInput[]
    NOT?: VacinaWhereInput | VacinaWhereInput[]
    id?: IntFilter<"Vacina"> | number
    nome?: StringFilter<"Vacina"> | string
    createdAt?: DateTimeFilter<"Vacina"> | Date | string
    updatedAt?: DateTimeFilter<"Vacina"> | Date | string
    ativo?: BoolFilter<"Vacina"> | boolean
    adminId?: IntFilter<"Vacina"> | number
    adminCriador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    registros?: VacinacaoUsuarioListRelationFilter
  }

  export type VacinaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ativo?: SortOrder
    adminId?: SortOrder
    adminCriador?: UsuarioOrderByWithRelationInput
    registros?: VacinacaoUsuarioOrderByRelationAggregateInput
  }

  export type VacinaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: VacinaWhereInput | VacinaWhereInput[]
    OR?: VacinaWhereInput[]
    NOT?: VacinaWhereInput | VacinaWhereInput[]
    createdAt?: DateTimeFilter<"Vacina"> | Date | string
    updatedAt?: DateTimeFilter<"Vacina"> | Date | string
    ativo?: BoolFilter<"Vacina"> | boolean
    adminId?: IntFilter<"Vacina"> | number
    adminCriador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    registros?: VacinacaoUsuarioListRelationFilter
  }, "id" | "nome">

  export type VacinaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ativo?: SortOrder
    adminId?: SortOrder
    _count?: VacinaCountOrderByAggregateInput
    _avg?: VacinaAvgOrderByAggregateInput
    _max?: VacinaMaxOrderByAggregateInput
    _min?: VacinaMinOrderByAggregateInput
    _sum?: VacinaSumOrderByAggregateInput
  }

  export type VacinaScalarWhereWithAggregatesInput = {
    AND?: VacinaScalarWhereWithAggregatesInput | VacinaScalarWhereWithAggregatesInput[]
    OR?: VacinaScalarWhereWithAggregatesInput[]
    NOT?: VacinaScalarWhereWithAggregatesInput | VacinaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vacina"> | number
    nome?: StringWithAggregatesFilter<"Vacina"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vacina"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vacina"> | Date | string
    ativo?: BoolWithAggregatesFilter<"Vacina"> | boolean
    adminId?: IntWithAggregatesFilter<"Vacina"> | number
  }

  export type VacinacaoUsuarioWhereInput = {
    AND?: VacinacaoUsuarioWhereInput | VacinacaoUsuarioWhereInput[]
    OR?: VacinacaoUsuarioWhereInput[]
    NOT?: VacinacaoUsuarioWhereInput | VacinacaoUsuarioWhereInput[]
    id?: IntFilter<"VacinacaoUsuario"> | number
    dataAplicacao?: DateTimeFilter<"VacinacaoUsuario"> | Date | string
    localAplicacao?: StringNullableFilter<"VacinacaoUsuario"> | string | null
    earnedCapibas?: IntFilter<"VacinacaoUsuario"> | number
    usuarioId?: IntFilter<"VacinacaoUsuario"> | number
    vacinaId?: IntFilter<"VacinacaoUsuario"> | number
    adminId?: IntFilter<"VacinacaoUsuario"> | number
    createdAt?: DateTimeFilter<"VacinacaoUsuario"> | Date | string
    updatedAt?: DateTimeFilter<"VacinacaoUsuario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vacina?: XOR<VacinaScalarRelationFilter, VacinaWhereInput>
    adminRegistrador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type VacinacaoUsuarioOrderByWithRelationInput = {
    id?: SortOrder
    dataAplicacao?: SortOrder
    localAplicacao?: SortOrderInput | SortOrder
    earnedCapibas?: SortOrder
    usuarioId?: SortOrder
    vacinaId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    vacina?: VacinaOrderByWithRelationInput
    adminRegistrador?: UsuarioOrderByWithRelationInput
  }

  export type VacinacaoUsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_vacinaId?: VacinacaoUsuarioUsuarioIdVacinaIdCompoundUniqueInput
    AND?: VacinacaoUsuarioWhereInput | VacinacaoUsuarioWhereInput[]
    OR?: VacinacaoUsuarioWhereInput[]
    NOT?: VacinacaoUsuarioWhereInput | VacinacaoUsuarioWhereInput[]
    dataAplicacao?: DateTimeFilter<"VacinacaoUsuario"> | Date | string
    localAplicacao?: StringNullableFilter<"VacinacaoUsuario"> | string | null
    earnedCapibas?: IntFilter<"VacinacaoUsuario"> | number
    usuarioId?: IntFilter<"VacinacaoUsuario"> | number
    vacinaId?: IntFilter<"VacinacaoUsuario"> | number
    adminId?: IntFilter<"VacinacaoUsuario"> | number
    createdAt?: DateTimeFilter<"VacinacaoUsuario"> | Date | string
    updatedAt?: DateTimeFilter<"VacinacaoUsuario"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vacina?: XOR<VacinaScalarRelationFilter, VacinaWhereInput>
    adminRegistrador?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "usuarioId_vacinaId">

  export type VacinacaoUsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    dataAplicacao?: SortOrder
    localAplicacao?: SortOrderInput | SortOrder
    earnedCapibas?: SortOrder
    usuarioId?: SortOrder
    vacinaId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VacinacaoUsuarioCountOrderByAggregateInput
    _avg?: VacinacaoUsuarioAvgOrderByAggregateInput
    _max?: VacinacaoUsuarioMaxOrderByAggregateInput
    _min?: VacinacaoUsuarioMinOrderByAggregateInput
    _sum?: VacinacaoUsuarioSumOrderByAggregateInput
  }

  export type VacinacaoUsuarioScalarWhereWithAggregatesInput = {
    AND?: VacinacaoUsuarioScalarWhereWithAggregatesInput | VacinacaoUsuarioScalarWhereWithAggregatesInput[]
    OR?: VacinacaoUsuarioScalarWhereWithAggregatesInput[]
    NOT?: VacinacaoUsuarioScalarWhereWithAggregatesInput | VacinacaoUsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VacinacaoUsuario"> | number
    dataAplicacao?: DateTimeWithAggregatesFilter<"VacinacaoUsuario"> | Date | string
    localAplicacao?: StringNullableWithAggregatesFilter<"VacinacaoUsuario"> | string | null
    earnedCapibas?: IntWithAggregatesFilter<"VacinacaoUsuario"> | number
    usuarioId?: IntWithAggregatesFilter<"VacinacaoUsuario"> | number
    vacinaId?: IntWithAggregatesFilter<"VacinacaoUsuario"> | number
    adminId?: IntWithAggregatesFilter<"VacinacaoUsuario"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VacinacaoUsuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VacinacaoUsuario"> | Date | string
  }

  export type VacinacaoBairroCreateInput = {
    nome: $Enums.BairrosRecife
    amountVaccines?: number
  }

  export type VacinacaoBairroUncheckedCreateInput = {
    id?: number
    nome: $Enums.BairrosRecife
    amountVaccines?: number
  }

  export type VacinacaoBairroUpdateInput = {
    nome?: EnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife
    amountVaccines?: IntFieldUpdateOperationsInput | number
  }

  export type VacinacaoBairroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: EnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife
    amountVaccines?: IntFieldUpdateOperationsInput | number
  }

  export type VacinacaoBairroCreateManyInput = {
    id?: number
    nome: $Enums.BairrosRecife
    amountVaccines?: number
  }

  export type VacinacaoBairroUpdateManyMutationInput = {
    nome?: EnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife
    amountVaccines?: IntFieldUpdateOperationsInput | number
  }

  export type VacinacaoBairroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: EnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife
    amountVaccines?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    cpf?: string | null
    nome?: string | null
    email?: string | null
    bairro?: $Enums.BairrosRecife | null
    role?: string
    conecta_recife_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    latestConectaToken?: string | null
    saldoCapibas?: number
    vacinacoesRecebidas?: VacinacaoUsuarioCreateNestedManyWithoutUsuarioInput
    vacinacoesRegistradas?: VacinacaoUsuarioCreateNestedManyWithoutAdminRegistradorInput
    vacinasCriadas?: VacinaCreateNestedManyWithoutAdminCriadorInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    cpf?: string | null
    nome?: string | null
    email?: string | null
    bairro?: $Enums.BairrosRecife | null
    role?: string
    conecta_recife_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    latestConectaToken?: string | null
    saldoCapibas?: number
    vacinacoesRecebidas?: VacinacaoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    vacinacoesRegistradas?: VacinacaoUsuarioUncheckedCreateNestedManyWithoutAdminRegistradorInput
    vacinasCriadas?: VacinaUncheckedCreateNestedManyWithoutAdminCriadorInput
  }

  export type UsuarioUpdateInput = {
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableEnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife | null
    role?: StringFieldUpdateOperationsInput | string
    conecta_recife_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestConectaToken?: NullableStringFieldUpdateOperationsInput | string | null
    saldoCapibas?: IntFieldUpdateOperationsInput | number
    vacinacoesRecebidas?: VacinacaoUsuarioUpdateManyWithoutUsuarioNestedInput
    vacinacoesRegistradas?: VacinacaoUsuarioUpdateManyWithoutAdminRegistradorNestedInput
    vacinasCriadas?: VacinaUpdateManyWithoutAdminCriadorNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableEnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife | null
    role?: StringFieldUpdateOperationsInput | string
    conecta_recife_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestConectaToken?: NullableStringFieldUpdateOperationsInput | string | null
    saldoCapibas?: IntFieldUpdateOperationsInput | number
    vacinacoesRecebidas?: VacinacaoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    vacinacoesRegistradas?: VacinacaoUsuarioUncheckedUpdateManyWithoutAdminRegistradorNestedInput
    vacinasCriadas?: VacinaUncheckedUpdateManyWithoutAdminCriadorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    cpf?: string | null
    nome?: string | null
    email?: string | null
    bairro?: $Enums.BairrosRecife | null
    role?: string
    conecta_recife_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    latestConectaToken?: string | null
    saldoCapibas?: number
  }

  export type UsuarioUpdateManyMutationInput = {
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableEnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife | null
    role?: StringFieldUpdateOperationsInput | string
    conecta_recife_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestConectaToken?: NullableStringFieldUpdateOperationsInput | string | null
    saldoCapibas?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableEnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife | null
    role?: StringFieldUpdateOperationsInput | string
    conecta_recife_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestConectaToken?: NullableStringFieldUpdateOperationsInput | string | null
    saldoCapibas?: IntFieldUpdateOperationsInput | number
  }

  export type VacinaCreateInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ativo?: boolean
    adminCriador: UsuarioCreateNestedOneWithoutVacinasCriadasInput
    registros?: VacinacaoUsuarioCreateNestedManyWithoutVacinaInput
  }

  export type VacinaUncheckedCreateInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ativo?: boolean
    adminId: number
    registros?: VacinacaoUsuarioUncheckedCreateNestedManyWithoutVacinaInput
  }

  export type VacinaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    adminCriador?: UsuarioUpdateOneRequiredWithoutVacinasCriadasNestedInput
    registros?: VacinacaoUsuarioUpdateManyWithoutVacinaNestedInput
  }

  export type VacinaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    adminId?: IntFieldUpdateOperationsInput | number
    registros?: VacinacaoUsuarioUncheckedUpdateManyWithoutVacinaNestedInput
  }

  export type VacinaCreateManyInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ativo?: boolean
    adminId: number
  }

  export type VacinaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VacinaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type VacinacaoUsuarioCreateInput = {
    dataAplicacao: Date | string
    localAplicacao?: string | null
    earnedCapibas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutVacinacoesRecebidasInput
    vacina: VacinaCreateNestedOneWithoutRegistrosInput
    adminRegistrador: UsuarioCreateNestedOneWithoutVacinacoesRegistradasInput
  }

  export type VacinacaoUsuarioUncheckedCreateInput = {
    id?: number
    dataAplicacao: Date | string
    localAplicacao?: string | null
    earnedCapibas?: number
    usuarioId: number
    vacinaId: number
    adminId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacinacaoUsuarioUpdateInput = {
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localAplicacao?: NullableStringFieldUpdateOperationsInput | string | null
    earnedCapibas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutVacinacoesRecebidasNestedInput
    vacina?: VacinaUpdateOneRequiredWithoutRegistrosNestedInput
    adminRegistrador?: UsuarioUpdateOneRequiredWithoutVacinacoesRegistradasNestedInput
  }

  export type VacinacaoUsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localAplicacao?: NullableStringFieldUpdateOperationsInput | string | null
    earnedCapibas?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    vacinaId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacinacaoUsuarioCreateManyInput = {
    id?: number
    dataAplicacao: Date | string
    localAplicacao?: string | null
    earnedCapibas?: number
    usuarioId: number
    vacinaId: number
    adminId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacinacaoUsuarioUpdateManyMutationInput = {
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localAplicacao?: NullableStringFieldUpdateOperationsInput | string | null
    earnedCapibas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacinacaoUsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localAplicacao?: NullableStringFieldUpdateOperationsInput | string | null
    earnedCapibas?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    vacinaId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumBairrosRecifeFilter<$PrismaModel = never> = {
    equals?: $Enums.BairrosRecife | EnumBairrosRecifeFieldRefInput<$PrismaModel>
    in?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel>
    not?: NestedEnumBairrosRecifeFilter<$PrismaModel> | $Enums.BairrosRecife
  }

  export type VacinacaoBairroCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    amountVaccines?: SortOrder
  }

  export type VacinacaoBairroAvgOrderByAggregateInput = {
    id?: SortOrder
    amountVaccines?: SortOrder
  }

  export type VacinacaoBairroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    amountVaccines?: SortOrder
  }

  export type VacinacaoBairroMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    amountVaccines?: SortOrder
  }

  export type VacinacaoBairroSumOrderByAggregateInput = {
    id?: SortOrder
    amountVaccines?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumBairrosRecifeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BairrosRecife | EnumBairrosRecifeFieldRefInput<$PrismaModel>
    in?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel>
    not?: NestedEnumBairrosRecifeWithAggregatesFilter<$PrismaModel> | $Enums.BairrosRecife
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBairrosRecifeFilter<$PrismaModel>
    _max?: NestedEnumBairrosRecifeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumBairrosRecifeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BairrosRecife | EnumBairrosRecifeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBairrosRecifeNullableFilter<$PrismaModel> | $Enums.BairrosRecife | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VacinacaoUsuarioListRelationFilter = {
    every?: VacinacaoUsuarioWhereInput
    some?: VacinacaoUsuarioWhereInput
    none?: VacinacaoUsuarioWhereInput
  }

  export type VacinaListRelationFilter = {
    every?: VacinaWhereInput
    some?: VacinaWhereInput
    none?: VacinaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VacinacaoUsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VacinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    bairro?: SortOrder
    role?: SortOrder
    conecta_recife_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latestConectaToken?: SortOrder
    saldoCapibas?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    saldoCapibas?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    bairro?: SortOrder
    role?: SortOrder
    conecta_recife_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latestConectaToken?: SortOrder
    saldoCapibas?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    bairro?: SortOrder
    role?: SortOrder
    conecta_recife_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latestConectaToken?: SortOrder
    saldoCapibas?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    saldoCapibas?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumBairrosRecifeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BairrosRecife | EnumBairrosRecifeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBairrosRecifeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BairrosRecife | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBairrosRecifeNullableFilter<$PrismaModel>
    _max?: NestedEnumBairrosRecifeNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type VacinaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ativo?: SortOrder
    adminId?: SortOrder
  }

  export type VacinaAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type VacinaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ativo?: SortOrder
    adminId?: SortOrder
  }

  export type VacinaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ativo?: SortOrder
    adminId?: SortOrder
  }

  export type VacinaSumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VacinaScalarRelationFilter = {
    is?: VacinaWhereInput
    isNot?: VacinaWhereInput
  }

  export type VacinacaoUsuarioUsuarioIdVacinaIdCompoundUniqueInput = {
    usuarioId: number
    vacinaId: number
  }

  export type VacinacaoUsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    dataAplicacao?: SortOrder
    localAplicacao?: SortOrder
    earnedCapibas?: SortOrder
    usuarioId?: SortOrder
    vacinaId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VacinacaoUsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    earnedCapibas?: SortOrder
    usuarioId?: SortOrder
    vacinaId?: SortOrder
    adminId?: SortOrder
  }

  export type VacinacaoUsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    dataAplicacao?: SortOrder
    localAplicacao?: SortOrder
    earnedCapibas?: SortOrder
    usuarioId?: SortOrder
    vacinaId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VacinacaoUsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    dataAplicacao?: SortOrder
    localAplicacao?: SortOrder
    earnedCapibas?: SortOrder
    usuarioId?: SortOrder
    vacinaId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VacinacaoUsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    earnedCapibas?: SortOrder
    usuarioId?: SortOrder
    vacinaId?: SortOrder
    adminId?: SortOrder
  }

  export type EnumBairrosRecifeFieldUpdateOperationsInput = {
    set?: $Enums.BairrosRecife
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VacinacaoUsuarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VacinacaoUsuarioCreateWithoutUsuarioInput, VacinacaoUsuarioUncheckedCreateWithoutUsuarioInput> | VacinacaoUsuarioCreateWithoutUsuarioInput[] | VacinacaoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VacinacaoUsuarioCreateOrConnectWithoutUsuarioInput | VacinacaoUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: VacinacaoUsuarioCreateManyUsuarioInputEnvelope
    connect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
  }

  export type VacinacaoUsuarioCreateNestedManyWithoutAdminRegistradorInput = {
    create?: XOR<VacinacaoUsuarioCreateWithoutAdminRegistradorInput, VacinacaoUsuarioUncheckedCreateWithoutAdminRegistradorInput> | VacinacaoUsuarioCreateWithoutAdminRegistradorInput[] | VacinacaoUsuarioUncheckedCreateWithoutAdminRegistradorInput[]
    connectOrCreate?: VacinacaoUsuarioCreateOrConnectWithoutAdminRegistradorInput | VacinacaoUsuarioCreateOrConnectWithoutAdminRegistradorInput[]
    createMany?: VacinacaoUsuarioCreateManyAdminRegistradorInputEnvelope
    connect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
  }

  export type VacinaCreateNestedManyWithoutAdminCriadorInput = {
    create?: XOR<VacinaCreateWithoutAdminCriadorInput, VacinaUncheckedCreateWithoutAdminCriadorInput> | VacinaCreateWithoutAdminCriadorInput[] | VacinaUncheckedCreateWithoutAdminCriadorInput[]
    connectOrCreate?: VacinaCreateOrConnectWithoutAdminCriadorInput | VacinaCreateOrConnectWithoutAdminCriadorInput[]
    createMany?: VacinaCreateManyAdminCriadorInputEnvelope
    connect?: VacinaWhereUniqueInput | VacinaWhereUniqueInput[]
  }

  export type VacinacaoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VacinacaoUsuarioCreateWithoutUsuarioInput, VacinacaoUsuarioUncheckedCreateWithoutUsuarioInput> | VacinacaoUsuarioCreateWithoutUsuarioInput[] | VacinacaoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VacinacaoUsuarioCreateOrConnectWithoutUsuarioInput | VacinacaoUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: VacinacaoUsuarioCreateManyUsuarioInputEnvelope
    connect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
  }

  export type VacinacaoUsuarioUncheckedCreateNestedManyWithoutAdminRegistradorInput = {
    create?: XOR<VacinacaoUsuarioCreateWithoutAdminRegistradorInput, VacinacaoUsuarioUncheckedCreateWithoutAdminRegistradorInput> | VacinacaoUsuarioCreateWithoutAdminRegistradorInput[] | VacinacaoUsuarioUncheckedCreateWithoutAdminRegistradorInput[]
    connectOrCreate?: VacinacaoUsuarioCreateOrConnectWithoutAdminRegistradorInput | VacinacaoUsuarioCreateOrConnectWithoutAdminRegistradorInput[]
    createMany?: VacinacaoUsuarioCreateManyAdminRegistradorInputEnvelope
    connect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
  }

  export type VacinaUncheckedCreateNestedManyWithoutAdminCriadorInput = {
    create?: XOR<VacinaCreateWithoutAdminCriadorInput, VacinaUncheckedCreateWithoutAdminCriadorInput> | VacinaCreateWithoutAdminCriadorInput[] | VacinaUncheckedCreateWithoutAdminCriadorInput[]
    connectOrCreate?: VacinaCreateOrConnectWithoutAdminCriadorInput | VacinaCreateOrConnectWithoutAdminCriadorInput[]
    createMany?: VacinaCreateManyAdminCriadorInputEnvelope
    connect?: VacinaWhereUniqueInput | VacinaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumBairrosRecifeFieldUpdateOperationsInput = {
    set?: $Enums.BairrosRecife | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VacinacaoUsuarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VacinacaoUsuarioCreateWithoutUsuarioInput, VacinacaoUsuarioUncheckedCreateWithoutUsuarioInput> | VacinacaoUsuarioCreateWithoutUsuarioInput[] | VacinacaoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VacinacaoUsuarioCreateOrConnectWithoutUsuarioInput | VacinacaoUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: VacinacaoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | VacinacaoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VacinacaoUsuarioCreateManyUsuarioInputEnvelope
    set?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    disconnect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    delete?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    connect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    update?: VacinacaoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | VacinacaoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VacinacaoUsuarioUpdateManyWithWhereWithoutUsuarioInput | VacinacaoUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VacinacaoUsuarioScalarWhereInput | VacinacaoUsuarioScalarWhereInput[]
  }

  export type VacinacaoUsuarioUpdateManyWithoutAdminRegistradorNestedInput = {
    create?: XOR<VacinacaoUsuarioCreateWithoutAdminRegistradorInput, VacinacaoUsuarioUncheckedCreateWithoutAdminRegistradorInput> | VacinacaoUsuarioCreateWithoutAdminRegistradorInput[] | VacinacaoUsuarioUncheckedCreateWithoutAdminRegistradorInput[]
    connectOrCreate?: VacinacaoUsuarioCreateOrConnectWithoutAdminRegistradorInput | VacinacaoUsuarioCreateOrConnectWithoutAdminRegistradorInput[]
    upsert?: VacinacaoUsuarioUpsertWithWhereUniqueWithoutAdminRegistradorInput | VacinacaoUsuarioUpsertWithWhereUniqueWithoutAdminRegistradorInput[]
    createMany?: VacinacaoUsuarioCreateManyAdminRegistradorInputEnvelope
    set?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    disconnect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    delete?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    connect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    update?: VacinacaoUsuarioUpdateWithWhereUniqueWithoutAdminRegistradorInput | VacinacaoUsuarioUpdateWithWhereUniqueWithoutAdminRegistradorInput[]
    updateMany?: VacinacaoUsuarioUpdateManyWithWhereWithoutAdminRegistradorInput | VacinacaoUsuarioUpdateManyWithWhereWithoutAdminRegistradorInput[]
    deleteMany?: VacinacaoUsuarioScalarWhereInput | VacinacaoUsuarioScalarWhereInput[]
  }

  export type VacinaUpdateManyWithoutAdminCriadorNestedInput = {
    create?: XOR<VacinaCreateWithoutAdminCriadorInput, VacinaUncheckedCreateWithoutAdminCriadorInput> | VacinaCreateWithoutAdminCriadorInput[] | VacinaUncheckedCreateWithoutAdminCriadorInput[]
    connectOrCreate?: VacinaCreateOrConnectWithoutAdminCriadorInput | VacinaCreateOrConnectWithoutAdminCriadorInput[]
    upsert?: VacinaUpsertWithWhereUniqueWithoutAdminCriadorInput | VacinaUpsertWithWhereUniqueWithoutAdminCriadorInput[]
    createMany?: VacinaCreateManyAdminCriadorInputEnvelope
    set?: VacinaWhereUniqueInput | VacinaWhereUniqueInput[]
    disconnect?: VacinaWhereUniqueInput | VacinaWhereUniqueInput[]
    delete?: VacinaWhereUniqueInput | VacinaWhereUniqueInput[]
    connect?: VacinaWhereUniqueInput | VacinaWhereUniqueInput[]
    update?: VacinaUpdateWithWhereUniqueWithoutAdminCriadorInput | VacinaUpdateWithWhereUniqueWithoutAdminCriadorInput[]
    updateMany?: VacinaUpdateManyWithWhereWithoutAdminCriadorInput | VacinaUpdateManyWithWhereWithoutAdminCriadorInput[]
    deleteMany?: VacinaScalarWhereInput | VacinaScalarWhereInput[]
  }

  export type VacinacaoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VacinacaoUsuarioCreateWithoutUsuarioInput, VacinacaoUsuarioUncheckedCreateWithoutUsuarioInput> | VacinacaoUsuarioCreateWithoutUsuarioInput[] | VacinacaoUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VacinacaoUsuarioCreateOrConnectWithoutUsuarioInput | VacinacaoUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: VacinacaoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | VacinacaoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VacinacaoUsuarioCreateManyUsuarioInputEnvelope
    set?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    disconnect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    delete?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    connect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    update?: VacinacaoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | VacinacaoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VacinacaoUsuarioUpdateManyWithWhereWithoutUsuarioInput | VacinacaoUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VacinacaoUsuarioScalarWhereInput | VacinacaoUsuarioScalarWhereInput[]
  }

  export type VacinacaoUsuarioUncheckedUpdateManyWithoutAdminRegistradorNestedInput = {
    create?: XOR<VacinacaoUsuarioCreateWithoutAdminRegistradorInput, VacinacaoUsuarioUncheckedCreateWithoutAdminRegistradorInput> | VacinacaoUsuarioCreateWithoutAdminRegistradorInput[] | VacinacaoUsuarioUncheckedCreateWithoutAdminRegistradorInput[]
    connectOrCreate?: VacinacaoUsuarioCreateOrConnectWithoutAdminRegistradorInput | VacinacaoUsuarioCreateOrConnectWithoutAdminRegistradorInput[]
    upsert?: VacinacaoUsuarioUpsertWithWhereUniqueWithoutAdminRegistradorInput | VacinacaoUsuarioUpsertWithWhereUniqueWithoutAdminRegistradorInput[]
    createMany?: VacinacaoUsuarioCreateManyAdminRegistradorInputEnvelope
    set?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    disconnect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    delete?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    connect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    update?: VacinacaoUsuarioUpdateWithWhereUniqueWithoutAdminRegistradorInput | VacinacaoUsuarioUpdateWithWhereUniqueWithoutAdminRegistradorInput[]
    updateMany?: VacinacaoUsuarioUpdateManyWithWhereWithoutAdminRegistradorInput | VacinacaoUsuarioUpdateManyWithWhereWithoutAdminRegistradorInput[]
    deleteMany?: VacinacaoUsuarioScalarWhereInput | VacinacaoUsuarioScalarWhereInput[]
  }

  export type VacinaUncheckedUpdateManyWithoutAdminCriadorNestedInput = {
    create?: XOR<VacinaCreateWithoutAdminCriadorInput, VacinaUncheckedCreateWithoutAdminCriadorInput> | VacinaCreateWithoutAdminCriadorInput[] | VacinaUncheckedCreateWithoutAdminCriadorInput[]
    connectOrCreate?: VacinaCreateOrConnectWithoutAdminCriadorInput | VacinaCreateOrConnectWithoutAdminCriadorInput[]
    upsert?: VacinaUpsertWithWhereUniqueWithoutAdminCriadorInput | VacinaUpsertWithWhereUniqueWithoutAdminCriadorInput[]
    createMany?: VacinaCreateManyAdminCriadorInputEnvelope
    set?: VacinaWhereUniqueInput | VacinaWhereUniqueInput[]
    disconnect?: VacinaWhereUniqueInput | VacinaWhereUniqueInput[]
    delete?: VacinaWhereUniqueInput | VacinaWhereUniqueInput[]
    connect?: VacinaWhereUniqueInput | VacinaWhereUniqueInput[]
    update?: VacinaUpdateWithWhereUniqueWithoutAdminCriadorInput | VacinaUpdateWithWhereUniqueWithoutAdminCriadorInput[]
    updateMany?: VacinaUpdateManyWithWhereWithoutAdminCriadorInput | VacinaUpdateManyWithWhereWithoutAdminCriadorInput[]
    deleteMany?: VacinaScalarWhereInput | VacinaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutVacinasCriadasInput = {
    create?: XOR<UsuarioCreateWithoutVacinasCriadasInput, UsuarioUncheckedCreateWithoutVacinasCriadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVacinasCriadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VacinacaoUsuarioCreateNestedManyWithoutVacinaInput = {
    create?: XOR<VacinacaoUsuarioCreateWithoutVacinaInput, VacinacaoUsuarioUncheckedCreateWithoutVacinaInput> | VacinacaoUsuarioCreateWithoutVacinaInput[] | VacinacaoUsuarioUncheckedCreateWithoutVacinaInput[]
    connectOrCreate?: VacinacaoUsuarioCreateOrConnectWithoutVacinaInput | VacinacaoUsuarioCreateOrConnectWithoutVacinaInput[]
    createMany?: VacinacaoUsuarioCreateManyVacinaInputEnvelope
    connect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
  }

  export type VacinacaoUsuarioUncheckedCreateNestedManyWithoutVacinaInput = {
    create?: XOR<VacinacaoUsuarioCreateWithoutVacinaInput, VacinacaoUsuarioUncheckedCreateWithoutVacinaInput> | VacinacaoUsuarioCreateWithoutVacinaInput[] | VacinacaoUsuarioUncheckedCreateWithoutVacinaInput[]
    connectOrCreate?: VacinacaoUsuarioCreateOrConnectWithoutVacinaInput | VacinacaoUsuarioCreateOrConnectWithoutVacinaInput[]
    createMany?: VacinacaoUsuarioCreateManyVacinaInputEnvelope
    connect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutVacinasCriadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutVacinasCriadasInput, UsuarioUncheckedCreateWithoutVacinasCriadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVacinasCriadasInput
    upsert?: UsuarioUpsertWithoutVacinasCriadasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVacinasCriadasInput, UsuarioUpdateWithoutVacinasCriadasInput>, UsuarioUncheckedUpdateWithoutVacinasCriadasInput>
  }

  export type VacinacaoUsuarioUpdateManyWithoutVacinaNestedInput = {
    create?: XOR<VacinacaoUsuarioCreateWithoutVacinaInput, VacinacaoUsuarioUncheckedCreateWithoutVacinaInput> | VacinacaoUsuarioCreateWithoutVacinaInput[] | VacinacaoUsuarioUncheckedCreateWithoutVacinaInput[]
    connectOrCreate?: VacinacaoUsuarioCreateOrConnectWithoutVacinaInput | VacinacaoUsuarioCreateOrConnectWithoutVacinaInput[]
    upsert?: VacinacaoUsuarioUpsertWithWhereUniqueWithoutVacinaInput | VacinacaoUsuarioUpsertWithWhereUniqueWithoutVacinaInput[]
    createMany?: VacinacaoUsuarioCreateManyVacinaInputEnvelope
    set?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    disconnect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    delete?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    connect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    update?: VacinacaoUsuarioUpdateWithWhereUniqueWithoutVacinaInput | VacinacaoUsuarioUpdateWithWhereUniqueWithoutVacinaInput[]
    updateMany?: VacinacaoUsuarioUpdateManyWithWhereWithoutVacinaInput | VacinacaoUsuarioUpdateManyWithWhereWithoutVacinaInput[]
    deleteMany?: VacinacaoUsuarioScalarWhereInput | VacinacaoUsuarioScalarWhereInput[]
  }

  export type VacinacaoUsuarioUncheckedUpdateManyWithoutVacinaNestedInput = {
    create?: XOR<VacinacaoUsuarioCreateWithoutVacinaInput, VacinacaoUsuarioUncheckedCreateWithoutVacinaInput> | VacinacaoUsuarioCreateWithoutVacinaInput[] | VacinacaoUsuarioUncheckedCreateWithoutVacinaInput[]
    connectOrCreate?: VacinacaoUsuarioCreateOrConnectWithoutVacinaInput | VacinacaoUsuarioCreateOrConnectWithoutVacinaInput[]
    upsert?: VacinacaoUsuarioUpsertWithWhereUniqueWithoutVacinaInput | VacinacaoUsuarioUpsertWithWhereUniqueWithoutVacinaInput[]
    createMany?: VacinacaoUsuarioCreateManyVacinaInputEnvelope
    set?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    disconnect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    delete?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    connect?: VacinacaoUsuarioWhereUniqueInput | VacinacaoUsuarioWhereUniqueInput[]
    update?: VacinacaoUsuarioUpdateWithWhereUniqueWithoutVacinaInput | VacinacaoUsuarioUpdateWithWhereUniqueWithoutVacinaInput[]
    updateMany?: VacinacaoUsuarioUpdateManyWithWhereWithoutVacinaInput | VacinacaoUsuarioUpdateManyWithWhereWithoutVacinaInput[]
    deleteMany?: VacinacaoUsuarioScalarWhereInput | VacinacaoUsuarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutVacinacoesRecebidasInput = {
    create?: XOR<UsuarioCreateWithoutVacinacoesRecebidasInput, UsuarioUncheckedCreateWithoutVacinacoesRecebidasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVacinacoesRecebidasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VacinaCreateNestedOneWithoutRegistrosInput = {
    create?: XOR<VacinaCreateWithoutRegistrosInput, VacinaUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: VacinaCreateOrConnectWithoutRegistrosInput
    connect?: VacinaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutVacinacoesRegistradasInput = {
    create?: XOR<UsuarioCreateWithoutVacinacoesRegistradasInput, UsuarioUncheckedCreateWithoutVacinacoesRegistradasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVacinacoesRegistradasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutVacinacoesRecebidasNestedInput = {
    create?: XOR<UsuarioCreateWithoutVacinacoesRecebidasInput, UsuarioUncheckedCreateWithoutVacinacoesRecebidasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVacinacoesRecebidasInput
    upsert?: UsuarioUpsertWithoutVacinacoesRecebidasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVacinacoesRecebidasInput, UsuarioUpdateWithoutVacinacoesRecebidasInput>, UsuarioUncheckedUpdateWithoutVacinacoesRecebidasInput>
  }

  export type VacinaUpdateOneRequiredWithoutRegistrosNestedInput = {
    create?: XOR<VacinaCreateWithoutRegistrosInput, VacinaUncheckedCreateWithoutRegistrosInput>
    connectOrCreate?: VacinaCreateOrConnectWithoutRegistrosInput
    upsert?: VacinaUpsertWithoutRegistrosInput
    connect?: VacinaWhereUniqueInput
    update?: XOR<XOR<VacinaUpdateToOneWithWhereWithoutRegistrosInput, VacinaUpdateWithoutRegistrosInput>, VacinaUncheckedUpdateWithoutRegistrosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutVacinacoesRegistradasNestedInput = {
    create?: XOR<UsuarioCreateWithoutVacinacoesRegistradasInput, UsuarioUncheckedCreateWithoutVacinacoesRegistradasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVacinacoesRegistradasInput
    upsert?: UsuarioUpsertWithoutVacinacoesRegistradasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVacinacoesRegistradasInput, UsuarioUpdateWithoutVacinacoesRegistradasInput>, UsuarioUncheckedUpdateWithoutVacinacoesRegistradasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumBairrosRecifeFilter<$PrismaModel = never> = {
    equals?: $Enums.BairrosRecife | EnumBairrosRecifeFieldRefInput<$PrismaModel>
    in?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel>
    not?: NestedEnumBairrosRecifeFilter<$PrismaModel> | $Enums.BairrosRecife
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumBairrosRecifeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BairrosRecife | EnumBairrosRecifeFieldRefInput<$PrismaModel>
    in?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel>
    not?: NestedEnumBairrosRecifeWithAggregatesFilter<$PrismaModel> | $Enums.BairrosRecife
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBairrosRecifeFilter<$PrismaModel>
    _max?: NestedEnumBairrosRecifeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumBairrosRecifeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BairrosRecife | EnumBairrosRecifeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBairrosRecifeNullableFilter<$PrismaModel> | $Enums.BairrosRecife | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBairrosRecifeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BairrosRecife | EnumBairrosRecifeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BairrosRecife[] | ListEnumBairrosRecifeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBairrosRecifeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BairrosRecife | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBairrosRecifeNullableFilter<$PrismaModel>
    _max?: NestedEnumBairrosRecifeNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VacinacaoUsuarioCreateWithoutUsuarioInput = {
    dataAplicacao: Date | string
    localAplicacao?: string | null
    earnedCapibas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vacina: VacinaCreateNestedOneWithoutRegistrosInput
    adminRegistrador: UsuarioCreateNestedOneWithoutVacinacoesRegistradasInput
  }

  export type VacinacaoUsuarioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    dataAplicacao: Date | string
    localAplicacao?: string | null
    earnedCapibas?: number
    vacinaId: number
    adminId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacinacaoUsuarioCreateOrConnectWithoutUsuarioInput = {
    where: VacinacaoUsuarioWhereUniqueInput
    create: XOR<VacinacaoUsuarioCreateWithoutUsuarioInput, VacinacaoUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type VacinacaoUsuarioCreateManyUsuarioInputEnvelope = {
    data: VacinacaoUsuarioCreateManyUsuarioInput | VacinacaoUsuarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type VacinacaoUsuarioCreateWithoutAdminRegistradorInput = {
    dataAplicacao: Date | string
    localAplicacao?: string | null
    earnedCapibas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutVacinacoesRecebidasInput
    vacina: VacinaCreateNestedOneWithoutRegistrosInput
  }

  export type VacinacaoUsuarioUncheckedCreateWithoutAdminRegistradorInput = {
    id?: number
    dataAplicacao: Date | string
    localAplicacao?: string | null
    earnedCapibas?: number
    usuarioId: number
    vacinaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacinacaoUsuarioCreateOrConnectWithoutAdminRegistradorInput = {
    where: VacinacaoUsuarioWhereUniqueInput
    create: XOR<VacinacaoUsuarioCreateWithoutAdminRegistradorInput, VacinacaoUsuarioUncheckedCreateWithoutAdminRegistradorInput>
  }

  export type VacinacaoUsuarioCreateManyAdminRegistradorInputEnvelope = {
    data: VacinacaoUsuarioCreateManyAdminRegistradorInput | VacinacaoUsuarioCreateManyAdminRegistradorInput[]
    skipDuplicates?: boolean
  }

  export type VacinaCreateWithoutAdminCriadorInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ativo?: boolean
    registros?: VacinacaoUsuarioCreateNestedManyWithoutVacinaInput
  }

  export type VacinaUncheckedCreateWithoutAdminCriadorInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ativo?: boolean
    registros?: VacinacaoUsuarioUncheckedCreateNestedManyWithoutVacinaInput
  }

  export type VacinaCreateOrConnectWithoutAdminCriadorInput = {
    where: VacinaWhereUniqueInput
    create: XOR<VacinaCreateWithoutAdminCriadorInput, VacinaUncheckedCreateWithoutAdminCriadorInput>
  }

  export type VacinaCreateManyAdminCriadorInputEnvelope = {
    data: VacinaCreateManyAdminCriadorInput | VacinaCreateManyAdminCriadorInput[]
    skipDuplicates?: boolean
  }

  export type VacinacaoUsuarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: VacinacaoUsuarioWhereUniqueInput
    update: XOR<VacinacaoUsuarioUpdateWithoutUsuarioInput, VacinacaoUsuarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<VacinacaoUsuarioCreateWithoutUsuarioInput, VacinacaoUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type VacinacaoUsuarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: VacinacaoUsuarioWhereUniqueInput
    data: XOR<VacinacaoUsuarioUpdateWithoutUsuarioInput, VacinacaoUsuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type VacinacaoUsuarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: VacinacaoUsuarioScalarWhereInput
    data: XOR<VacinacaoUsuarioUpdateManyMutationInput, VacinacaoUsuarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type VacinacaoUsuarioScalarWhereInput = {
    AND?: VacinacaoUsuarioScalarWhereInput | VacinacaoUsuarioScalarWhereInput[]
    OR?: VacinacaoUsuarioScalarWhereInput[]
    NOT?: VacinacaoUsuarioScalarWhereInput | VacinacaoUsuarioScalarWhereInput[]
    id?: IntFilter<"VacinacaoUsuario"> | number
    dataAplicacao?: DateTimeFilter<"VacinacaoUsuario"> | Date | string
    localAplicacao?: StringNullableFilter<"VacinacaoUsuario"> | string | null
    earnedCapibas?: IntFilter<"VacinacaoUsuario"> | number
    usuarioId?: IntFilter<"VacinacaoUsuario"> | number
    vacinaId?: IntFilter<"VacinacaoUsuario"> | number
    adminId?: IntFilter<"VacinacaoUsuario"> | number
    createdAt?: DateTimeFilter<"VacinacaoUsuario"> | Date | string
    updatedAt?: DateTimeFilter<"VacinacaoUsuario"> | Date | string
  }

  export type VacinacaoUsuarioUpsertWithWhereUniqueWithoutAdminRegistradorInput = {
    where: VacinacaoUsuarioWhereUniqueInput
    update: XOR<VacinacaoUsuarioUpdateWithoutAdminRegistradorInput, VacinacaoUsuarioUncheckedUpdateWithoutAdminRegistradorInput>
    create: XOR<VacinacaoUsuarioCreateWithoutAdminRegistradorInput, VacinacaoUsuarioUncheckedCreateWithoutAdminRegistradorInput>
  }

  export type VacinacaoUsuarioUpdateWithWhereUniqueWithoutAdminRegistradorInput = {
    where: VacinacaoUsuarioWhereUniqueInput
    data: XOR<VacinacaoUsuarioUpdateWithoutAdminRegistradorInput, VacinacaoUsuarioUncheckedUpdateWithoutAdminRegistradorInput>
  }

  export type VacinacaoUsuarioUpdateManyWithWhereWithoutAdminRegistradorInput = {
    where: VacinacaoUsuarioScalarWhereInput
    data: XOR<VacinacaoUsuarioUpdateManyMutationInput, VacinacaoUsuarioUncheckedUpdateManyWithoutAdminRegistradorInput>
  }

  export type VacinaUpsertWithWhereUniqueWithoutAdminCriadorInput = {
    where: VacinaWhereUniqueInput
    update: XOR<VacinaUpdateWithoutAdminCriadorInput, VacinaUncheckedUpdateWithoutAdminCriadorInput>
    create: XOR<VacinaCreateWithoutAdminCriadorInput, VacinaUncheckedCreateWithoutAdminCriadorInput>
  }

  export type VacinaUpdateWithWhereUniqueWithoutAdminCriadorInput = {
    where: VacinaWhereUniqueInput
    data: XOR<VacinaUpdateWithoutAdminCriadorInput, VacinaUncheckedUpdateWithoutAdminCriadorInput>
  }

  export type VacinaUpdateManyWithWhereWithoutAdminCriadorInput = {
    where: VacinaScalarWhereInput
    data: XOR<VacinaUpdateManyMutationInput, VacinaUncheckedUpdateManyWithoutAdminCriadorInput>
  }

  export type VacinaScalarWhereInput = {
    AND?: VacinaScalarWhereInput | VacinaScalarWhereInput[]
    OR?: VacinaScalarWhereInput[]
    NOT?: VacinaScalarWhereInput | VacinaScalarWhereInput[]
    id?: IntFilter<"Vacina"> | number
    nome?: StringFilter<"Vacina"> | string
    createdAt?: DateTimeFilter<"Vacina"> | Date | string
    updatedAt?: DateTimeFilter<"Vacina"> | Date | string
    ativo?: BoolFilter<"Vacina"> | boolean
    adminId?: IntFilter<"Vacina"> | number
  }

  export type UsuarioCreateWithoutVacinasCriadasInput = {
    cpf?: string | null
    nome?: string | null
    email?: string | null
    bairro?: $Enums.BairrosRecife | null
    role?: string
    conecta_recife_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    latestConectaToken?: string | null
    saldoCapibas?: number
    vacinacoesRecebidas?: VacinacaoUsuarioCreateNestedManyWithoutUsuarioInput
    vacinacoesRegistradas?: VacinacaoUsuarioCreateNestedManyWithoutAdminRegistradorInput
  }

  export type UsuarioUncheckedCreateWithoutVacinasCriadasInput = {
    id?: number
    cpf?: string | null
    nome?: string | null
    email?: string | null
    bairro?: $Enums.BairrosRecife | null
    role?: string
    conecta_recife_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    latestConectaToken?: string | null
    saldoCapibas?: number
    vacinacoesRecebidas?: VacinacaoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    vacinacoesRegistradas?: VacinacaoUsuarioUncheckedCreateNestedManyWithoutAdminRegistradorInput
  }

  export type UsuarioCreateOrConnectWithoutVacinasCriadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVacinasCriadasInput, UsuarioUncheckedCreateWithoutVacinasCriadasInput>
  }

  export type VacinacaoUsuarioCreateWithoutVacinaInput = {
    dataAplicacao: Date | string
    localAplicacao?: string | null
    earnedCapibas?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutVacinacoesRecebidasInput
    adminRegistrador: UsuarioCreateNestedOneWithoutVacinacoesRegistradasInput
  }

  export type VacinacaoUsuarioUncheckedCreateWithoutVacinaInput = {
    id?: number
    dataAplicacao: Date | string
    localAplicacao?: string | null
    earnedCapibas?: number
    usuarioId: number
    adminId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacinacaoUsuarioCreateOrConnectWithoutVacinaInput = {
    where: VacinacaoUsuarioWhereUniqueInput
    create: XOR<VacinacaoUsuarioCreateWithoutVacinaInput, VacinacaoUsuarioUncheckedCreateWithoutVacinaInput>
  }

  export type VacinacaoUsuarioCreateManyVacinaInputEnvelope = {
    data: VacinacaoUsuarioCreateManyVacinaInput | VacinacaoUsuarioCreateManyVacinaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutVacinasCriadasInput = {
    update: XOR<UsuarioUpdateWithoutVacinasCriadasInput, UsuarioUncheckedUpdateWithoutVacinasCriadasInput>
    create: XOR<UsuarioCreateWithoutVacinasCriadasInput, UsuarioUncheckedCreateWithoutVacinasCriadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVacinasCriadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVacinasCriadasInput, UsuarioUncheckedUpdateWithoutVacinasCriadasInput>
  }

  export type UsuarioUpdateWithoutVacinasCriadasInput = {
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableEnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife | null
    role?: StringFieldUpdateOperationsInput | string
    conecta_recife_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestConectaToken?: NullableStringFieldUpdateOperationsInput | string | null
    saldoCapibas?: IntFieldUpdateOperationsInput | number
    vacinacoesRecebidas?: VacinacaoUsuarioUpdateManyWithoutUsuarioNestedInput
    vacinacoesRegistradas?: VacinacaoUsuarioUpdateManyWithoutAdminRegistradorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutVacinasCriadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableEnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife | null
    role?: StringFieldUpdateOperationsInput | string
    conecta_recife_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestConectaToken?: NullableStringFieldUpdateOperationsInput | string | null
    saldoCapibas?: IntFieldUpdateOperationsInput | number
    vacinacoesRecebidas?: VacinacaoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    vacinacoesRegistradas?: VacinacaoUsuarioUncheckedUpdateManyWithoutAdminRegistradorNestedInput
  }

  export type VacinacaoUsuarioUpsertWithWhereUniqueWithoutVacinaInput = {
    where: VacinacaoUsuarioWhereUniqueInput
    update: XOR<VacinacaoUsuarioUpdateWithoutVacinaInput, VacinacaoUsuarioUncheckedUpdateWithoutVacinaInput>
    create: XOR<VacinacaoUsuarioCreateWithoutVacinaInput, VacinacaoUsuarioUncheckedCreateWithoutVacinaInput>
  }

  export type VacinacaoUsuarioUpdateWithWhereUniqueWithoutVacinaInput = {
    where: VacinacaoUsuarioWhereUniqueInput
    data: XOR<VacinacaoUsuarioUpdateWithoutVacinaInput, VacinacaoUsuarioUncheckedUpdateWithoutVacinaInput>
  }

  export type VacinacaoUsuarioUpdateManyWithWhereWithoutVacinaInput = {
    where: VacinacaoUsuarioScalarWhereInput
    data: XOR<VacinacaoUsuarioUpdateManyMutationInput, VacinacaoUsuarioUncheckedUpdateManyWithoutVacinaInput>
  }

  export type UsuarioCreateWithoutVacinacoesRecebidasInput = {
    cpf?: string | null
    nome?: string | null
    email?: string | null
    bairro?: $Enums.BairrosRecife | null
    role?: string
    conecta_recife_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    latestConectaToken?: string | null
    saldoCapibas?: number
    vacinacoesRegistradas?: VacinacaoUsuarioCreateNestedManyWithoutAdminRegistradorInput
    vacinasCriadas?: VacinaCreateNestedManyWithoutAdminCriadorInput
  }

  export type UsuarioUncheckedCreateWithoutVacinacoesRecebidasInput = {
    id?: number
    cpf?: string | null
    nome?: string | null
    email?: string | null
    bairro?: $Enums.BairrosRecife | null
    role?: string
    conecta_recife_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    latestConectaToken?: string | null
    saldoCapibas?: number
    vacinacoesRegistradas?: VacinacaoUsuarioUncheckedCreateNestedManyWithoutAdminRegistradorInput
    vacinasCriadas?: VacinaUncheckedCreateNestedManyWithoutAdminCriadorInput
  }

  export type UsuarioCreateOrConnectWithoutVacinacoesRecebidasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVacinacoesRecebidasInput, UsuarioUncheckedCreateWithoutVacinacoesRecebidasInput>
  }

  export type VacinaCreateWithoutRegistrosInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ativo?: boolean
    adminCriador: UsuarioCreateNestedOneWithoutVacinasCriadasInput
  }

  export type VacinaUncheckedCreateWithoutRegistrosInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ativo?: boolean
    adminId: number
  }

  export type VacinaCreateOrConnectWithoutRegistrosInput = {
    where: VacinaWhereUniqueInput
    create: XOR<VacinaCreateWithoutRegistrosInput, VacinaUncheckedCreateWithoutRegistrosInput>
  }

  export type UsuarioCreateWithoutVacinacoesRegistradasInput = {
    cpf?: string | null
    nome?: string | null
    email?: string | null
    bairro?: $Enums.BairrosRecife | null
    role?: string
    conecta_recife_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    latestConectaToken?: string | null
    saldoCapibas?: number
    vacinacoesRecebidas?: VacinacaoUsuarioCreateNestedManyWithoutUsuarioInput
    vacinasCriadas?: VacinaCreateNestedManyWithoutAdminCriadorInput
  }

  export type UsuarioUncheckedCreateWithoutVacinacoesRegistradasInput = {
    id?: number
    cpf?: string | null
    nome?: string | null
    email?: string | null
    bairro?: $Enums.BairrosRecife | null
    role?: string
    conecta_recife_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    latestConectaToken?: string | null
    saldoCapibas?: number
    vacinacoesRecebidas?: VacinacaoUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    vacinasCriadas?: VacinaUncheckedCreateNestedManyWithoutAdminCriadorInput
  }

  export type UsuarioCreateOrConnectWithoutVacinacoesRegistradasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVacinacoesRegistradasInput, UsuarioUncheckedCreateWithoutVacinacoesRegistradasInput>
  }

  export type UsuarioUpsertWithoutVacinacoesRecebidasInput = {
    update: XOR<UsuarioUpdateWithoutVacinacoesRecebidasInput, UsuarioUncheckedUpdateWithoutVacinacoesRecebidasInput>
    create: XOR<UsuarioCreateWithoutVacinacoesRecebidasInput, UsuarioUncheckedCreateWithoutVacinacoesRecebidasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVacinacoesRecebidasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVacinacoesRecebidasInput, UsuarioUncheckedUpdateWithoutVacinacoesRecebidasInput>
  }

  export type UsuarioUpdateWithoutVacinacoesRecebidasInput = {
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableEnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife | null
    role?: StringFieldUpdateOperationsInput | string
    conecta_recife_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestConectaToken?: NullableStringFieldUpdateOperationsInput | string | null
    saldoCapibas?: IntFieldUpdateOperationsInput | number
    vacinacoesRegistradas?: VacinacaoUsuarioUpdateManyWithoutAdminRegistradorNestedInput
    vacinasCriadas?: VacinaUpdateManyWithoutAdminCriadorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutVacinacoesRecebidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableEnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife | null
    role?: StringFieldUpdateOperationsInput | string
    conecta_recife_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestConectaToken?: NullableStringFieldUpdateOperationsInput | string | null
    saldoCapibas?: IntFieldUpdateOperationsInput | number
    vacinacoesRegistradas?: VacinacaoUsuarioUncheckedUpdateManyWithoutAdminRegistradorNestedInput
    vacinasCriadas?: VacinaUncheckedUpdateManyWithoutAdminCriadorNestedInput
  }

  export type VacinaUpsertWithoutRegistrosInput = {
    update: XOR<VacinaUpdateWithoutRegistrosInput, VacinaUncheckedUpdateWithoutRegistrosInput>
    create: XOR<VacinaCreateWithoutRegistrosInput, VacinaUncheckedCreateWithoutRegistrosInput>
    where?: VacinaWhereInput
  }

  export type VacinaUpdateToOneWithWhereWithoutRegistrosInput = {
    where?: VacinaWhereInput
    data: XOR<VacinaUpdateWithoutRegistrosInput, VacinaUncheckedUpdateWithoutRegistrosInput>
  }

  export type VacinaUpdateWithoutRegistrosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    adminCriador?: UsuarioUpdateOneRequiredWithoutVacinasCriadasNestedInput
  }

  export type VacinaUncheckedUpdateWithoutRegistrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioUpsertWithoutVacinacoesRegistradasInput = {
    update: XOR<UsuarioUpdateWithoutVacinacoesRegistradasInput, UsuarioUncheckedUpdateWithoutVacinacoesRegistradasInput>
    create: XOR<UsuarioCreateWithoutVacinacoesRegistradasInput, UsuarioUncheckedCreateWithoutVacinacoesRegistradasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVacinacoesRegistradasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVacinacoesRegistradasInput, UsuarioUncheckedUpdateWithoutVacinacoesRegistradasInput>
  }

  export type UsuarioUpdateWithoutVacinacoesRegistradasInput = {
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableEnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife | null
    role?: StringFieldUpdateOperationsInput | string
    conecta_recife_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestConectaToken?: NullableStringFieldUpdateOperationsInput | string | null
    saldoCapibas?: IntFieldUpdateOperationsInput | number
    vacinacoesRecebidas?: VacinacaoUsuarioUpdateManyWithoutUsuarioNestedInput
    vacinasCriadas?: VacinaUpdateManyWithoutAdminCriadorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutVacinacoesRegistradasInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableEnumBairrosRecifeFieldUpdateOperationsInput | $Enums.BairrosRecife | null
    role?: StringFieldUpdateOperationsInput | string
    conecta_recife_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestConectaToken?: NullableStringFieldUpdateOperationsInput | string | null
    saldoCapibas?: IntFieldUpdateOperationsInput | number
    vacinacoesRecebidas?: VacinacaoUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    vacinasCriadas?: VacinaUncheckedUpdateManyWithoutAdminCriadorNestedInput
  }

  export type VacinacaoUsuarioCreateManyUsuarioInput = {
    id?: number
    dataAplicacao: Date | string
    localAplicacao?: string | null
    earnedCapibas?: number
    vacinaId: number
    adminId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacinacaoUsuarioCreateManyAdminRegistradorInput = {
    id?: number
    dataAplicacao: Date | string
    localAplicacao?: string | null
    earnedCapibas?: number
    usuarioId: number
    vacinaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacinaCreateManyAdminCriadorInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ativo?: boolean
  }

  export type VacinacaoUsuarioUpdateWithoutUsuarioInput = {
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localAplicacao?: NullableStringFieldUpdateOperationsInput | string | null
    earnedCapibas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vacina?: VacinaUpdateOneRequiredWithoutRegistrosNestedInput
    adminRegistrador?: UsuarioUpdateOneRequiredWithoutVacinacoesRegistradasNestedInput
  }

  export type VacinacaoUsuarioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localAplicacao?: NullableStringFieldUpdateOperationsInput | string | null
    earnedCapibas?: IntFieldUpdateOperationsInput | number
    vacinaId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacinacaoUsuarioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localAplicacao?: NullableStringFieldUpdateOperationsInput | string | null
    earnedCapibas?: IntFieldUpdateOperationsInput | number
    vacinaId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacinacaoUsuarioUpdateWithoutAdminRegistradorInput = {
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localAplicacao?: NullableStringFieldUpdateOperationsInput | string | null
    earnedCapibas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutVacinacoesRecebidasNestedInput
    vacina?: VacinaUpdateOneRequiredWithoutRegistrosNestedInput
  }

  export type VacinacaoUsuarioUncheckedUpdateWithoutAdminRegistradorInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localAplicacao?: NullableStringFieldUpdateOperationsInput | string | null
    earnedCapibas?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    vacinaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacinacaoUsuarioUncheckedUpdateManyWithoutAdminRegistradorInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localAplicacao?: NullableStringFieldUpdateOperationsInput | string | null
    earnedCapibas?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    vacinaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacinaUpdateWithoutAdminCriadorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    registros?: VacinacaoUsuarioUpdateManyWithoutVacinaNestedInput
  }

  export type VacinaUncheckedUpdateWithoutAdminCriadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    registros?: VacinacaoUsuarioUncheckedUpdateManyWithoutVacinaNestedInput
  }

  export type VacinaUncheckedUpdateManyWithoutAdminCriadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VacinacaoUsuarioCreateManyVacinaInput = {
    id?: number
    dataAplicacao: Date | string
    localAplicacao?: string | null
    earnedCapibas?: number
    usuarioId: number
    adminId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VacinacaoUsuarioUpdateWithoutVacinaInput = {
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localAplicacao?: NullableStringFieldUpdateOperationsInput | string | null
    earnedCapibas?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutVacinacoesRecebidasNestedInput
    adminRegistrador?: UsuarioUpdateOneRequiredWithoutVacinacoesRegistradasNestedInput
  }

  export type VacinacaoUsuarioUncheckedUpdateWithoutVacinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localAplicacao?: NullableStringFieldUpdateOperationsInput | string | null
    earnedCapibas?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VacinacaoUsuarioUncheckedUpdateManyWithoutVacinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataAplicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    localAplicacao?: NullableStringFieldUpdateOperationsInput | string | null
    earnedCapibas?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
graph TB
    subgraph "Cliente"
        CLIENT[Cliente HTTP]
    end

    subgraph "Capa de Presentación"
        CONTROLLER[UserController<br/>@RestController]
    end

    subgraph "Capa de Servicio"
        SERVICE_IF[UserService<br/>Interface]
        SERVICE_IMPL[UserServiceImpl<br/>@Service]
    end

    subgraph "Capa de Acceso a Datos"
        DAO[UserDao<br/>JpaRepository]
        MAPPER[UserMapper<br/>@Mapper MapStruct]
    end

    subgraph "Capa de Entidades"
        USER_ENTITY[User Entity<br/>@Entity]
        PHONE_ENTITY[Phone Entity<br/>@Entity]
    end

    subgraph "Capa de Modelos/DTOs"
        USER_REQUEST[UserRequest]
        USER_RESPONSE[UserResponse]
        USER_DTO[UserDto]
        PHONE_DTO[PhoneDto]
    end

    subgraph "Capa de Excepciones"
        SMART_JOB_EX[SmartJobException]
        NONEXISTENT_EX[NonexistentEntityException]
    end

    subgraph "Base de Datos"
        DB[(HSQLDB<br/>In-Memory)]
        USERS_TABLE[(USERS Table)]
        PHONES_TABLE[(PHONES Table)]
    end

    CLIENT -->|POST /user/api/v1| CONTROLLER
    CONTROLLER -->|createUser| SERVICE_IF
    SERVICE_IF --> SERVICE_IMPL
    SERVICE_IMPL -->|userDtoToUserEntitie| MAPPER
    SERVICE_IMPL -->|save| DAO
    MAPPER -->|convierte| USER_REQUEST
    MAPPER -->|convierte| USER_ENTITY
    MAPPER -->|convierte| USER_RESPONSE
    MAPPER -->|convierte| USER_DTO
    DAO -->|persiste| USER_ENTITY
    USER_ENTITY -->|@ManyToOne| PHONE_ENTITY
    DAO -->|JPA| DB
    DB --> USERS_TABLE
    DB --> PHONES_TABLE
    CONTROLLER -.->|throws| SMART_JOB_EX
    SERVICE_IMPL -.->|throws| NONEXISTENT_EX
    USER_REQUEST --> PHONE_DTO

    style CONTROLLER fill:#e1f5ff
    style SERVICE_IMPL fill:#fff4e1
    style DAO fill:#e8f5e9
    style MAPPER fill:#f3e5f5
    style USER_ENTITY fill:#fff9c4
    style PHONE_ENTITY fill:#fff9c4
    style DB fill:#ffebee

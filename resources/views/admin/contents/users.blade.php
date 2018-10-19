<main>
    <div class="top-main">
        <h1>Користувачі сайту</h1>
        @include('admin.logout')
    </div>
    <div class="table-user">
        <table>
            <thead>
            <tr>
                <th>Ім’я</th>
                <th>Пошта</th>
                <th>Роль
                    <div class="tooltip"><img src="{{ asset('admn') }}/imgs/Subtract.svg" alt="1">
                        <span class="tooltiptext">Підказка</span>
                    </div>

                </th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            @forelse($users as $user)
                <tr class="{{ $user->hasRole('admin') ? 'admin' : '' }}">
                    <td class="td-name">{{ $user->name }}</td>
                    <td class="td-mail">{{ $user->email }}</td>
                    <td class="td-position">
                        {{Form::select('role_id',
                            $roles,
                            $user->role_id,
                            ['class' => 'custom-select sources'])
                        }}
                    </td>
                    <td></td>
                    <td class="td-delete">
                        <div class="btn btn-white" data-user="{{ $user->id }}" data-url="{{ route('admin.users.destroy', $user->id) }}">
                            Видалити
                        </div>
                    </td>
                </tr>
            @empty
            @endforelse

            </tbody>
        </table>
    </div>

    <div class="create-user">
        <div class="under-back"></div>
        <div class="create">
            <img src="{{ asset('admn') }}/imgs/create.png" alt="create">
            <h2>Створюйте нових користувачів
                <p>та присвой роль для керування над сайтом</p>
            </h2>
        </div>
        <form id="create-user" class="form-register" action="{{ route('admin.users.store') }}" method="post">
            <div>
                <input id='email' type="email" class="form-control" name="email" required>
                <label for="email">Пошта</label>
            </div>
            <div>
                {{Form::select('role_id',
                    $roles,
                    null,
                    ['class' => 'custom-select sources'])
                }}
            </div>
            <div>
                <input id='name' type="text" class="form-control" name="name" required>
                <label for="name">Ім’я</label>
            </div>
            <div>
                <input id='pass' type="password" class="form-control" name="password" required>
                <label for="pass">Пароль</label>
                <div class="eye" data-action="see-password" data-toggle="pass">
                    <i class="icon-eye-open"></i>
                </div>
            </div>
            <div>
                <input id='passtrue' type="password" class="form-control" name="password_confirmation" required>
                <label for="passtrue">Повтор пароля</label>
                <div class="eye" data-action="see-password" data-toggle="passtrue">
                    <i class="icon-eye-open"></i>
                </div>
            </div>
            <button class="btn btn-red" type="submit">Створити</button>

        </form>
    </div>
</main>
<div class="pops-alert">

</div>
<div class="pop-delete">
    <div class="pop-main">
        <div class="doubt-text">
            Ви впевнені що хочете видалити цього користувача?
        </div>
        <div class="doubt-button">
            <div class="button-success">Так</div>
            <div class="button-cancel">Ні</div>
        </div>
    </div>
    <div class="pop-back"></div>
</div>

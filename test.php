<?php

// date_default_timezone_set("Asia/Jakarta");
// // error_reporting(0);

// $config['sess_cookie_name'] = 'thinasmart';
// $config['sess_expiration'] = 7200;
// $config['encryption_key'] = md5(time());

// // $hostname = 'localhost';
// // $username = 'id18254419_admin';
// // $password = 'A7@5+*<5qSP|/ti&';
// // $database = 'id18254419_thinasmart';

// $hostname = 'localhost';
// $username = 'root';
// $password = '';
// $database = 'thinasmart';

// $connection = mysqli_connect($hostname, $username, $password, $database);


// // Check connection
// if (mysqli_connect_errno()) {
//     echo "Database connection failed : " . mysqli_connect_error();
//     die;
// }else{
//     echo "succes connect <br>";
// }

?>

<table class="table table-bordered table-hover" id="example1">
    <thead class="thead-light">
        <tr>
            <th>#</th>
            <th>Username</th>
            <th>Nama</th>
            <th>Options</th>
        </tr>
    </thead>
    <tbody>
        <?php
        $query = mysqli_query($connection, "SELECT * FROM user ");

        $no = 1;
        while ($row = mysqli_fetch_array($query)) {
            $sampple[] = $row;
        ?>
            <tr>
                <th scope="row"><?= $no++ ?></th>
                <td><?= $row['username'] ?></td>
                <td><?= $row['name'] ?></td>
                <td>
                    <div class="btn-group" role="group">

                        <a href="?module=<?= $module ?>&action=edit&id=<?= $row['id_akun']; ?>" type="button" class="btn btn-outline-secondary btn-warning btn-sm mr-2" data-toggle="tooltip" data-placement="top" title="Edit">
                            <i class="fa fa-pencil-square-o"></i>
                        </a>

                        <a href="<?= $query_model ?>&action=delete&id=<?= $row['id_akun']; ?>" onclick="window.alert('Apa Anda yakin??')" type="button" class="btn btn-outline-secondary btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Delete">
                            <i class="fa fa-trash"></i>
                        </a>
                    </div>
                </td>

            </tr>

        <?php
        }
        ?>

    </tbody>
</table>

<?php
$sample_api = json_encode($sampple);
$sample_api2 = json_decode($sampple_api);

// echo "<pre>";
// echo "<br>encode<br>";
// print_r($sample_api);
// echo "<br>decode<br>";
// print_r($sample_api2);
// echo "</pre>";
?>

<script> let data = <?= $sample_api; ?> </script>
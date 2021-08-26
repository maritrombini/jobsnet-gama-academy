<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCandidatosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('candidatos', function (Blueprint $table) {
            $table->id();
            $table->string('Nome', 150);
            $table->string('CargoPretendido', 60);
            $table->date('DtNascimento');
            $table->string('EstadoCivil', 20);
            $table->string('Cep',7 );
            $table->string('Endereco', 200);
            $table->integer('Numero');
            $table->string('Complemento', 50);
            $table->string('Bairro', 150);
            $table->string('Cidade', 200);
            $table->string('Estado', 2);
            $table->string('TelefoFixo', 15);
            $table->string('TelefoCelular', 15);
            $table->string('Email', 200)->unique();
            $table->string('Rg', 15);
            $table->string('Cpf', 15)->unique();
            $table->string('PossuiVeiculo', 5);
            $table->string('PossuiCnh', 5);
            $table->string('SegundoGrau', 15);
            $table->string('EnsinoTecnico', 15);
            $table->string('Graduacao', 15);
            $table->string('PosGraduacao', 15);
            $table->string('UltimaEmpresa', 150);
            $table->string('Funcao', 60);
            $table->date('DtAdmissao');
            $table->date('DtDemissao')->nullable();
            $table->text('AtividadesExercidas');
            $table->text('ObjetivosFuturos');
            $table->text('ConheceAlguem');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('candidatos');
    }
}

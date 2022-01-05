package com.tomas.repositorios;

import com.tomas.entidades.Folder;
import com.tomas.entidades.ToDo;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoRespository extends CrudRepository<ToDo, Long> {

	public abstract ArrayList<ToDo> findByFolder(Folder folder);

}

package com.tomas.repositorios;

import com.tomas.entidades.Folder;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FolderRepository extends CrudRepository<Folder, Long> {

}
